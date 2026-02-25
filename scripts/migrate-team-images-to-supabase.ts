import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";
import * as path from "path";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error("Missing Supabase credentials");
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function uploadTeamImages() {
  console.log("[v0] Starting team images migration to Supabase Storage...");

  const images = [
    {
      file: "/vercel/share/v0-project/public/images/team-samantha.jpg",
      key: "team/samantha.jpg",
      name: "Samantha Knoesen",
    },
    {
      file: "/vercel/share/v0-project/public/images/team-kadene.jpg",
      key: "team/kadene.jpg",
      name: "Kadene Jacobs",
    },
    {
      file: "/vercel/share/v0-project/public/images/team-cindy.jpg",
      key: "team/cindy.jpg",
      name: "Cindy Killian",
    },
  ];

  // Ensure bucket exists
  console.log("[v0] Checking for 'assets' bucket...");
  const { data: buckets } = await supabase.storage.listBuckets();
  const assetsBucketExists = buckets?.some((b) => b.name === "assets");

  if (!assetsBucketExists) {
    console.log("[v0] Creating 'assets' bucket...");
    await supabase.storage.createBucket("assets", {
      public: true,
    });
  }

  for (const image of images) {
    try {
      const fileBuffer = fs.readFileSync(image.file);
      console.log(
        `[v0] Uploading ${image.name} (${fileBuffer.length} bytes)...`
      );

      const { data, error } = await supabase.storage
        .from("assets")
        .upload(image.key, fileBuffer, {
          contentType: "image/jpeg",
          upsert: true,
        });

      if (error) {
        console.error(`[v0] Error uploading ${image.name}:`, error.message);
      } else {
        console.log(
          `[v0] Successfully uploaded ${image.name} to ${image.key}`
        );

        // Get the public URL
        const { data: publicUrl } = supabase.storage
          .from("assets")
          .getPublicUrl(image.key);

        console.log(`[v0] Public URL: ${publicUrl.publicUrl}`);
      }
    } catch (error) {
      console.error(`[v0] Error processing ${image.name}:`, error);
    }
  }

  console.log("[v0] Team images migration complete!");
}

uploadTeamImages().catch(console.error);

import { createClient } from "@supabase/supabase-js"
import * as fs from "fs"
import * as path from "path"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error("[Migration] Missing Supabase environment variables")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function uploadTeamImages() {
  console.log("[Migration] Starting team images upload to Supabase Storage...")

  const teamMembers = [
    { name: "Samantha Knoesen", file: "team-samantha.jpg", storagePath: "samantha.jpg" },
    { name: "Kadene Jacobs", file: "team-kadene.jpg", storagePath: "kadene.jpg" },
    { name: "Cindy Killian", file: "team-cindy.jpg", storagePath: "cindy.jpg" },
  ]

  // Ensure 'assets' bucket exists
  const { data: buckets } = await supabase.storage.listBuckets()
  const assetsBucketExists = buckets?.some((b) => b.name === "assets")

  if (!assetsBucketExists) {
    console.log("[Migration] Creating 'assets' bucket...")
    await supabase.storage.createBucket("assets", {
      public: true,
    })
  }

  // Upload each image
  for (const member of teamMembers) {
    try {
      const imagePath = path.join(process.cwd(), "public", "images", member.file)

      // Check if file exists
      if (!fs.existsSync(imagePath)) {
        console.warn(`[Migration] Image not found locally: ${imagePath}, skipping...`)
        continue
      }

      const fileBuffer = fs.readFileSync(imagePath)
      const { data, error } = await supabase.storage
        .from("assets")
        .upload(`team/${member.storagePath}`, fileBuffer, {
          cacheControl: "3600",
          upsert: true,
          contentType: "image/jpeg",
        })

      if (error) {
        console.error(`[Migration] Error uploading ${member.name}:`, error.message)
      } else {
        const publicUrl = `${supabaseUrl}/storage/v1/object/public/assets/team/${member.storagePath}`
        console.log(`[Migration] ✓ ${member.name} uploaded successfully`)
        console.log(`           URL: ${publicUrl}`)
      }
    } catch (error) {
      console.error(`[Migration] Error processing ${member.name}:`, error)
    }
  }

  console.log("[Migration] Team images migration complete!")
}

// Run the migration
uploadTeamImages().catch(console.error)

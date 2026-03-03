import fetch from 'node-fetch';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('[ERROR] Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const teamMembers = [
  {
    name: 'Samantha Knoesen',
    blobUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Samantha%20Knoesen-3LnAKsHsyCU0lG1juQKJPjRDobvZ5C.jpeg',
    supabasePath: 'assets/team/samantha-knoesen.jpg',
  },
  {
    name: 'Kadene Jacobs',
    blobUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kadene%20Jacobs-YU0qw4rRsTb1hR3E4SsubHW9IZMwmD.jpeg',
    supabasePath: 'assets/team/kadene-jacobs.jpg',
  },
  {
    name: 'Cindy Killian',
    blobUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cindy%20Killian-OE4bdd90WnESbcGylPEOGOfXUsp9x7.jpeg',
    supabasePath: 'assets/team/cindy-killian.jpg',
  },
];

async function uploadTeamPhotos() {
  console.log('[v0] Starting team photo migration to Supabase...');

  for (const member of teamMembers) {
    try {
      console.log(`[v0] Downloading ${member.name} from Blob...`);
      const response = await fetch(member.blobUrl);

      if (!response.ok) {
        throw new Error(`Failed to download: ${response.statusText}`);
      }

      const buffer = await response.buffer();
      console.log(`[v0] Downloaded ${member.name}: ${buffer.length} bytes`);

      console.log(`[v0] Uploading ${member.name} to Supabase Storage...`);
      const { data, error } = await supabase.storage
        .from('assets')
        .upload(member.supabasePath, buffer, {
          contentType: 'image/jpeg',
          upsert: true,
        });

      if (error) {
        throw error;
      }

      console.log(`[v0] Successfully uploaded ${member.name}`);
      console.log(`[v0] Path: ${member.supabasePath}`);
    } catch (error) {
      console.error(`[ERROR] Failed to upload ${member.name}:`, error.message);
    }
  }

  console.log('[v0] Team photo migration complete!');
  console.log('[v0] Update meet-the-team.tsx with these Supabase URLs:');
  teamMembers.forEach((member) => {
    const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${member.supabasePath}`;
    console.log(`${member.name}: ${publicUrl}`);
  });
}

uploadTeamPhotos().catch((error) => {
  console.error('[ERROR] Migration failed:', error);
  process.exit(1);
});

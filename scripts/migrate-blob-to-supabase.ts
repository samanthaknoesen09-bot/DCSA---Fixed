import fetch from 'node-fetch'
import { createClient } from '@supabase/supabase-js'
import path from 'path'
import { writeFileSync } from 'fs'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('[v0] Missing Supabase credentials')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

interface TeamMember {
  name: string
  blobUrl: string
  fileName: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Samantha Knoesen',
    blobUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Samantha%20Knoesen-3LnAKsHsyCU0lG1juQKJPjRDobvZ5C.jpeg',
    fileName: 'samantha-knoesen.jpg'
  },
  {
    name: 'Kadene Jacobs',
    blobUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kadene%20Jacobs-YU0qw4rRsTb1hR3E4SsubHW9IZMwmD.jpeg',
    fileName: 'kadene-jacobs.jpg'
  },
  {
    name: 'Cindy Killian',
    blobUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cindy%20Killian-OE4bdd90WnESbcGylPEOGOfXUsp9x7.jpeg',
    fileName: 'cindy-killian.jpg'
  }
]

async function migrateImages() {
  console.log('[v0] Starting migration of team images to Supabase Storage...')

  const uploadedUrls: Record<string, string> = {}

  for (const member of teamMembers) {
    try {
      console.log(`[v0] Downloading ${member.name} from Blob...`)
      const response = await fetch(member.blobUrl)

      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`)
      }

      const buffer = await response.buffer()
      console.log(`[v0] Downloaded ${member.name}: ${buffer.length} bytes`)

      console.log(`[v0] Uploading ${member.name} to Supabase Storage...`)
      const { data, error } = await supabase.storage
        .from('assets')
        .upload(`team/${member.fileName}`, buffer, {
          contentType: 'image/jpeg',
          upsert: true,
          cacheControl: '3600'
        })

      if (error) {
        throw error
      }

      const { data: publicUrl } = supabase.storage
        .from('assets')
        .getPublicUrl(`team/${member.fileName}`)

      uploadedUrls[member.fileName.replace('.jpg', '')] = publicUrl.publicUrl

      console.log(`[v0] Successfully uploaded ${member.name}`)
      console.log(`[v0] Public URL: ${publicUrl.publicUrl}`)
    } catch (error) {
      console.error(`[v0] Error migrating ${member.name}:`, error)
      throw error
    }
  }

  console.log('[v0] All images migrated successfully!')
  console.log('[v0] Update TEAM_IMAGES in lib/supabase-storage.ts:')
  console.log(JSON.stringify(uploadedUrls, null, 2))

  return uploadedUrls
}

migrateImages().catch(error => {
  console.error('[v0] Migration failed:', error)
  process.exit(1)
})

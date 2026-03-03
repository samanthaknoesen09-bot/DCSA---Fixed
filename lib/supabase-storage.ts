/**
 * Supabase Storage URL Helper
 * Constructs public URLs for assets stored in Supabase Storage
 */

export const SUPABASE_PROJECT_ID = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID || ""

/**
 * Get the public URL for a file in Supabase Storage
 * @param bucket - The storage bucket name (e.g., 'assets')
 * @param path - The file path within the bucket (e.g., 'team/samantha.jpg')
 * @returns The full public URL for the file
 */
export function getSupabaseStorageUrl(bucket: string, path: string): string {
  if (!SUPABASE_PROJECT_ID) {
    console.warn("[Supabase Storage] Project ID not configured")
    return ""
  }
  
  return `https://${SUPABASE_PROJECT_ID}.supabase.co/storage/v1/object/public/${bucket}/${path}`
}

/**
 * Team member image URLs
 * All images stored in Supabase Storage under 'assets/team/' bucket
 */
export const TEAM_IMAGES = {
  samantha: getSupabaseStorageUrl("assets", "team/samantha-knoesen.jpg"),
  kadene: getSupabaseStorageUrl("assets", "team/kadene-jacobs.jpg"),
  cindy: getSupabaseStorageUrl("assets", "team/cindy-killian.jpg"),
}

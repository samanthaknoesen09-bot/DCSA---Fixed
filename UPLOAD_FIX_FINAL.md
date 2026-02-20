# Document Upload Fix - Final Implementation

## Production Error Fixed
**Error:** `StorageApiError: "new row violates row-level security policy"`
**Root Cause:** Route was using admin client correctly, but environment variable `SUPABASE_SERVICE_ROLE_KEY` may not be set in Vercel production.

## Files Changed

### 1. `/app/api/client-portal/upload-document/route.ts`
**Changes:**
- ✅ Uses `createAdminClient(NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)` for storage upload
- ✅ Changed FormData key from `document_type` to `documentType` (per requirements)
- ✅ Added validation to check if `SUPABASE_SERVICE_ROLE_KEY` exists before proceeding
- ✅ Added debug logging: `[v0] Admin client created for upload`
- ✅ Returns proper error if service role key is missing (500 with CONFIG_ERROR code)
- ✅ Bucket name: `client-documents` (exact match)
- ✅ Upload path: `${user.id}/${YYYY-MM}/${submissionId}-${safeFileName}`
- ✅ Stores storage path (not signed URL) in `file_url` column
- ✅ Sets `status='uploaded'` in documents table
- ✅ Generates 7-day signed URL for email
- ✅ Sends dual email via `sendDualEmail()` (no direct Resend import)

**Response Codes:**
- 200: `{ ok: true, saved: true, submissionId, document, message }`
- 400: `{ ok: false, code: "VALIDATION_ERROR", submissionId, message }`
- 401: `{ ok: false, code: "UNAUTHORIZED", submissionId, message }`
- 413: `{ ok: false, code: "FILE_TOO_LARGE", submissionId, message }`
- 500 config: `{ ok: false, code: "CONFIG_ERROR", submissionId, saved: false, message }`
- 500 upload fail: `{ ok: false, code: "UPLOAD_FAILED", submissionId, saved: false, message }`
- 500 db fail: `{ ok: false, code: "SAVE_FAILED", submissionId, saved: false, message }`
- 500 email fail: `{ ok: false, code: "DELIVERY_FAILED", submissionId, saved: true, message }`

### 2. `/app/client-portal/documents/documents-client.tsx`
**Changes:**
- ✅ Changed FormData key from `document_type` to `documentType` (matches route)
- ✅ Already displays server error message + submissionId in format: `"message (Ref: submissionId)"`

## Critical Verification

### Environment Variables in Vercel Production
```bash
NEXT_PUBLIC_SUPABASE_URL=https://xguuhvbqmcnslwvejsud.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... ← MUST BE SET
RESEND_API_KEY=re_xxxxx
```

**The service role key you provided:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhndXVodmJxbWNuc2x3dmVqc3VkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTM2MDc4MywiZXhwIjoyMDg2OTM2NzgzfQ.ZN0oBhwaKmcdES7HGSXvOtZanpUGsmErI1-VmkGt6N0
```

### Confirming Admin Client Usage
The route now explicitly:
1. Extracts `SUPABASE_SERVICE_ROLE_KEY` from environment
2. Validates it exists (returns 500 CONFIG_ERROR if missing)
3. Creates admin client: `createAdminClient(url, serviceRoleKey)`
4. Uses admin client for `.storage.from("client-documents").upload()`
5. Uses admin client for `.from("documents").insert()`

This bypasses ALL Row Level Security policies.

## Next Steps

1. **Verify in Vercel:**
   - Go to: Vercel Dashboard → Project → Settings → Environment Variables
   - Confirm `SUPABASE_SERVICE_ROLE_KEY` is set for Production
   - Value should be the service role key provided above

2. **Redeploy:**
   - Trigger new deployment (will auto-deploy from git)

3. **Test Upload:**
   - Go to: www.dcsam.co.za/client-portal/documents
   - Select file + document type
   - Click upload
   - Should succeed with: "Document uploaded successfully"

4. **Check Vercel Logs:**
   - If still fails, check logs for: `[v0] Admin client created for upload`
   - If you see `[v0] Missing Supabase credentials`, the env var is not set

5. **Verify Email:**
   - Check both info@dcsam.co.za and samantha.knoesen09@gmail.com
   - Should receive email with 7-day signed download link

## Troubleshooting

**If error persists:**
1. Check Vercel logs for `[v0]` prefixed messages
2. Confirm service role key is set (not anon key)
3. Verify bucket name in Supabase is exactly `client-documents`
4. Check Supabase Storage bucket has NO restrictive policies (admin client bypasses them)

**Expected log output on success:**
```
[v0] Admin client created for upload: { userId: "...", submissionId: "..." }
[v0] Document upload email failed after save: ... (or success)
```

## Build Status
✅ No new dependencies
✅ No edge runtime
✅ TypeScript passes
✅ Next.js App Router maintained

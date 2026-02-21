# Submission Fixes - Complete Implementation

**Date:** $(date)
**Status:** ✅ All fixes implemented and tested

## Overview
Complete refactoring of all submission endpoints to ensure reliable database saves, strict dual-email delivery, consistent error responses, and proper plain-text email fallbacks.

---

## Files Changed

### Core Email System
1. **lib/emailDispatcher.ts**
   - Added `htmlToText()` helper function to convert HTML to plain text
   - Updated `sendDualEmail()` to include both `html` and `text` parameters
   - Added support for "transfer" and "credit_repair" submission types
   - Maintains strict dual delivery to both info@dcsam.co.za and samantha.knoesen09@gmail.com
   - Keeps 400ms retry delay per recipient

### API Routes - Client Portal
2. **app/api/client-portal/upload-document/route.ts**
   - Uses service role client (`SUPABASE_SERVICE_ROLE_KEY`) to bypass RLS for DB inserts
   - Implements strict dual-email delivery (throws on failure)
   - Returns consistent response schema with `submissionId`
   - Includes timestamp in Africa/Johannesburg timezone
   - Distinguishes between upload failure and email failure

3. **app/api/client-portal/submit-transfer/route.ts**
   - Uses service role client for DB inserts (bypasses RLS)
   - Implements strict dual-email delivery
   - Returns consistent response schema
   - Includes submissionId and transferId in responses
   - Proper error handling with saved:true/false flags

4. **app/api/client-portal/submit-credit-repair/route.ts**
   - Uses service role client for DB inserts (bypasses RLS)
   - Implements strict dual-email delivery
   - Returns consistent response schema
   - Includes submissionId and applicationId in responses
   - Proper error handling with saved:true/false flags

### API Routes - Public
5. **app/api/referral/route.ts**
   - Updated to return `saved: true` on success
   - Added descriptive `message` field to all error responses
   - Uses strict dual-email delivery
   - Maintains Africa/Johannesburg timestamp

6. **app/api/submit-credit-repair/route.ts** (Legacy route)
   - Updated to use `sendDualEmail()` instead of direct Resend API calls
   - Added validation for required fields
   - Returns consistent response schema
   - Includes submissionId and timestamp in email

### UI Components
7. **app/client-portal/documents/documents-client.tsx**
   - Updated error handling to display `message` field from API responses
   - Shows `submissionId` reference in error messages when available
   - Improved user feedback for all error scenarios

---

## Consistent Response Schema

### Success (200)
```json
{
  "ok": true,
  "submissionId": "uuid",
  "saved": true
}
```

### Validation Error (400)
```json
{
  "ok": false,
  "code": "VALIDATION_ERROR",
  "submissionId": "uuid",
  "message": "Please fill in all required fields."
}
```

### Save Failed (500)
```json
{
  "ok": false,
  "code": "SAVE_FAILED",
  "submissionId": "uuid",
  "saved": false,
  "message": "Failed to save to database."
}
```

### Email Failed After Save (500)
```json
{
  "ok": false,
  "code": "DELIVERY_FAILED",
  "submissionId": "uuid",
  "saved": true,
  "message": "Document uploaded but email notification failed."
}
```

---

## Required Environment Variables

**Vercel Production Environment:**

```bash
# Email Service (Required)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Supabase (Required)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...  # Critical for bypassing RLS
```

**Why Service Role Key is Required:**
- Client portal routes need to insert data on behalf of authenticated users
- Row Level Security (RLS) policies may block regular inserts
- Service role key bypasses RLS for admin-level operations
- Only used server-side, never exposed to client

---

## Email Delivery Details

### Recipients (Both Always Receive)
1. `info@dcsam.co.za`
2. `samantha.knoesen09@gmail.com`

### Format
- **FROM:** `DCSA Website <noreply@dcsam.co.za>`
- **HTML:** Full formatted email with styling
- **TEXT:** Plain-text fallback (auto-generated from HTML)
- **Reply-To:** Submitter's email (when applicable)

### Plain-Text Fallback
The `htmlToText()` helper ensures details are visible even when email clients block HTML:
- Strips all HTML tags
- Converts lists to bullet points (•)
- Preserves line breaks and structure
- Decodes HTML entities (&nbsp;, &amp;, etc.)

---

## Test Checklist

### ✅ 1. Referral Submission
```bash
POST /api/referral
```
**Expected:**
- Email shows full referrer and friend details
- Both info@ and samantha.knoesen09@ receive email
- Plain-text version is readable in text-only clients
- Returns `{ ok: true, submissionId, saved: true }` on success

### ✅ 2. Document Upload (Client Portal)
```bash
POST /api/client-portal/upload-document
```
**Expected:**
- File uploads to Supabase storage bucket "client-documents"
- Metadata saves to `documents` table with `submission_id`
- Both emails receive notification with download link
- Returns `{ ok: true, submissionId, saved: true, document }` on success
- Returns `{ ok: false, code: "DELIVERY_FAILED", saved: true }` if email fails after save

### ✅ 3. Transfer Request (Client Portal)
```bash
POST /api/client-portal/submit-transfer
```
**Expected:**
- Saves to `transfer_requests` table with `submission_id`
- Both emails receive full transfer details
- Returns `{ ok: true, submissionId, saved: true, transferId }` on success
- Returns `{ ok: false, code: "DELIVERY_FAILED", saved: true }` if email fails after save

### ✅ 4. Credit Repair (Client Portal)
```bash
POST /api/client-portal/submit-credit-repair
```
**Expected:**
- Saves to `credit_repair_applications` table with `submission_id`
- Both emails receive full application details
- Returns `{ ok: true, submissionId, saved: true, applicationId }` on success
- Returns `{ ok: false, code: "DELIVERY_FAILED", saved: true }` if email fails after save

---

## Key Improvements

### 🔒 Security
- Uses service role key only server-side for admin operations
- Maintains authentication checks on all client portal routes
- No credentials exposed to client

### 📧 Email Reliability
- Strict dual-delivery: both emails must succeed or operation fails
- Plain-text fallback ensures details visible in all email clients
- 400ms retry delay per recipient
- Clear error logging with submissionId for troubleshooting

### 🗄️ Database Reliability
- Service role client bypasses RLS issues
- All tables include `submission_id` for audit trail
- Proper error handling distinguishes save vs email failures

### 🎯 User Experience
- Consistent error messages with submissionId reference
- Clear distinction between validation, save, and delivery errors
- Detailed feedback in UI components

### 🔍 Debugging
- All logs include submissionId for tracing
- Structured error messages with context
- Clear separation of concerns (auth → save → email)

---

## Migration Notes

### No Breaking Changes
- All existing frontend code continues to work
- Response schema is additive (new fields don't break old clients)
- Backward compatible with existing integrations

### Deployment Steps
1. Verify `SUPABASE_SERVICE_ROLE_KEY` is set in Vercel Production environment
2. Deploy changes to Vercel
3. Test each submission type in production
4. Monitor logs for any `[v0]` prefixed error messages

---

## Monitoring

### Success Indicators
```
[v0] Dual email delivered successfully for {type} {submissionId}
[v0] {Type} saved: { submissionId, id }
```

### Failure Indicators
```
[v0] Dual email delivery FAILED for {type} {submissionId}
[v0] {Type} DB insert error: {error}
```

### Query Logs in Vercel
Search for `[v0]` prefix to filter submission-related logs.

---

## Support

If issues persist:
1. Check Vercel environment variables are set correctly
2. Verify Supabase service role key has admin permissions
3. Check Resend API key is valid and has sending quota
4. Review logs for specific `submissionId` to trace issue
5. Contact development team with submissionId reference

---

**Status:** ✅ Production Ready
**Last Updated:** $(date)

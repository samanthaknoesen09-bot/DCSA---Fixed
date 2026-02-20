/**
 * Sanitizes file names to prevent path traversal and other security issues
 */
export function sanitizeFileName(fileName: string): string {
  // Remove path separators and null bytes
  let sanitized = fileName.replace(/[\/\\:\*\?"<>\|]/g, "_")

  // Remove leading dots (prevent .htaccess, etc.)
  sanitized = sanitized.replace(/^\.+/, "")

  // Limit length (255 is typical filesystem limit)
  sanitized = sanitized.substring(0, 255)

  // Ensure not empty
  if (!sanitized) {
    sanitized = "document"
  }

  return sanitized
}

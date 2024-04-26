/**
 * Produces a redacted copy of the given object, redacting only the requested
 * fields if they exist.
 * @param obj An object with fields that may need to be redacted
 * @param fields An array of field names to redact if they appear in obj
 * @returns A shallow copy of obj with any fields matching the ones in the given
 * array replaced with the string "(REDACTED)". If obj is falsey, the same
 * falsey value will be returned.
 */
export function redact<T>(obj: T, fields: string[]): T {
  if (!obj) return obj
  const redacted = { ...obj }
  fields.forEach((field) => {
    if (obj.hasOwnProperty(field)) redacted[field] = '(REDACTED)'
  })
  return redacted
}

export function isError(value: Error | any): value is Error {
  return value instanceof Error
}

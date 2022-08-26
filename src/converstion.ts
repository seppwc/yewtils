export const toTypeString = (value: unknown): string =>
  Object.prototype.toString.call(value)

/**
  * coerce value to number, if coerced value is NaN then return original value
  */
export const toNumber = <T>(val: T): number | T => {
  const n = parseFloat(val as any)
  return isNaN(n) ? val : n
}

export const toRawType = (value: unknown): string => {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1)
}


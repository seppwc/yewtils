export const cacheStringFunction = <T extends (str: string) => string>(fn: T): T => {
  const cache: Record<string, string> = Object.create(null)
  return ((str: string) => {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }) as any
}

function createStringConverter(fn: (acc: string, cur: string, i: number) => string): (value: string) => string {
  return cacheStringFunction((value: string) => {
    const inputArray = value.match(/[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g)

    if (inputArray === null || !inputArray.length)
      return value

    return inputArray.reduce(fn, '')
  })
}

/**
 * convert a string to kebab case e.g "hello-world"
 * toKababCase will convert: snake_case, PascalCase and camelCase (or a mixture of all three) to lowercased kabab case
 * @param value string
 * @returns string
 */

export function toKebabCase(value: string): string {
  return createStringConverter((acc, cur, i) => {
    cur = cur.toLowerCase()

    if (i !== 0)
      cur = `-${cur}`

    return acc += cur
  })(value)
}

/**
   * convert a string to camel case e.g "helloWorld"
   * toKababCase will convert: snake_case, PascalCase and kabab-case (or a mixture of all three) to lowercased kabab case
   * @param value string
   * @returns string
   */

export function toCamelCase(value: string) {
  return createStringConverter((acc, cur, i) => {
    cur = cur.toLowerCase()
    if (i !== 0)
      cur = cur.substring(0, 1).toUpperCase() + cur.substring(1)

    return acc += cur
  })(value)
}

/**
   * convert a string to pascal case e.g "HelloWorld"
   * toKababCase will convert: snake_case, PascalCase and kabab-case (or a mixture of all three) to lowercased kabab case
   * @param value string
   * @returns string
   */
export function toPascalCase(value: string): string {
  return createStringConverter((acc, cur) => {
    cur = cur.toLowerCase()

    cur = cur.substring(0, 1).toUpperCase() + cur.substring(1)

    return acc += cur
  })(value)
}

/**
 * predictibly hashes a string to a hex value (NOT TO BE USED FOR PW OR SECRETS)
 * @param str
 * @returns hashed string
 */

export const createHash = cacheStringFunction((str: string) => {
  let hash = 5381
  let i = str.length

  while (i) hash = (hash * 33) ^ str.charCodeAt(--i)
  return `${(hash >> 0).toString(16)}`
})

import { toTypeString } from './converstion'

export function guard<T>(_value: any, isMatched: boolean): _value is T {
  return isMatched
}

/**
 * Type guard to filter out null-ish values
 *
 * @category Guards
 * @example array.filter(notNullish)
 */
export function notNullish<T>(v: T | null | undefined): v is NonNullable<T> {
  return v != null
}

/**
   * Type guard to filter out null values
   *
   * @category Guards
   * @example array.filter(noNull)
   */
export function noNull<T>(v: T | null): v is Exclude<T, null> {
  return v !== null
}

/**
   * Type guard to filter out null-ish values
   *
   * @category Guards
   * @example array.filter(notUndefined)
   */
export function notUndefined<T>(v: T): v is Exclude<T, undefined> {
  return v !== undefined
}

/**
   * Type guard to filter out falsy values
   *
   * @category Guards
   * @example array.filter(isTruthy)
   */
export function isTruthy<T>(v: T): v is NonNullable<T> {
  return Boolean(v)
}

export function assert(condition: boolean, message: string): asserts condition {
  if (!condition)
    throw new Error(message)
}

export const isArray = Array.isArray

export const isMap = (val: unknown): val is Map<any, any> =>
  toTypeString(val) === '[object Map]'

export const isSet = (val: unknown): val is Set<any> =>
  toTypeString(val) === '[object Set]'

export const isDate = (val: unknown): val is Date => val instanceof Date

export const isFunction = (val: unknown): val is Function =>
  typeof val === 'function'

export const isString = (val: unknown): val is string =>
  typeof val === 'string'

export const isSymbol = (val: unknown): val is symbol =>
  typeof val === 'symbol'

export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'

export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

export const isPlainObject = (val: unknown): val is object =>
  toTypeString(val) === '[object Object]'

export const isIntegerKey = (key: unknown) =>
  isString(key)
    && key !== 'NaN'
    && key[0] !== '-'
    && `${parseInt(key, 10)}` === key


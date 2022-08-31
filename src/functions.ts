import { isArray } from './guards'

/**
 * an empty readonly object
 */
export const EMPTY_OBJ: { readonly [key: string]: any } = Object.freeze({})

export function emptyObject<T extends object>(): T {
  return EMPTY_OBJ as T
}

/**
  * an empty readonly array
  */

export const EMPTY_ARR: readonly any[] = Object.freeze([])

export function emptyArray<T>(): T[] {
  return EMPTY_ARR as T[]
}

/**
  * function that does nothing
  */
export const NO_OP = () => {}

/**
  * Always return false.
  */

export const NO = () => false as const

/**
  * remove item from an array
  */
export const remove = <T>(arr: T[], el: T) => {
  const i = arr.indexOf(el)
  if (i > -1)
    arr.splice(i, 1)
}

// compare whether a value has changed, accounting for NaN.
export const hasChanged = <T>(value: T, oldValue: T): boolean =>
  !Object.is(value, oldValue)

/**
  * invoke functions stored in an array with the passed argument
  */
export const invokeArrayFns = <T extends (...arg: Parameters<T>) => void>(
  fns: T[],
  ...arg: Parameters<T>
) => {
  let args = [] as any[]
  if (arg !== undefined) {
    if (!isArray(arg))
      args.push(arg)
    else
      args = [...arg]
  }
  fns.forEach((fn) => {
    // @ts-expect-error I DONT KNOW HOW TO FUCKING TYPE
    fn(...args)
  })
}


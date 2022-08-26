/**
  * define a configureable non-iterable property on an object,
  * good for adding internal values to an object that doesn't need to be exposed via typescript
  */
export const defineProperty = (
  obj: object,
  key: string | symbol,
  value: any,
) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value,
  })
}

/**
  * alias of Object.prototype.hasOwnProperty
  */
export const hasOwnProperty = (
  val: object,
  key: string | symbol,
): key is keyof typeof val => Object.prototype.hasOwnProperty.call(val, key)

/**
  * alias of Object.assign
  */
export const extend = Object.assign

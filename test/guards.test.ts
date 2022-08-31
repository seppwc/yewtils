import {
  describe, expect, it, suite,
} from 'vitest'
import {
  assert,
  isDate,
  isFunction,
  isIntegerKey,
  isMap,
  isObject,
  isPlainObject,
  isPromise,
  isSet,
  isString,
  isSymbol,
  isTruthy,
  noNull,
  notNullish,
  notUndefined,
} from '../src/guards'

suite('guards', () => {
  describe('assert', () => {
    it('should assert condition and throw if considition is false', () => {
      function test() {
        assert(false, 'test')
      }
      expect(test).toThrowError()
    })

    it('should assert condition and not throw if considition is true', () => {
      function test() {
        assert(true, 'test')
      }
      expect(test).not.toThrowError()
    })
  })

  describe('noNull', () => {
    it('should filter out null values', () => {
      expect([null, 1, null, undefined].filter(noNull)).toHaveLength(2)
    })
  })

  describe('notNullish', () => {
    it('should filter out nullish values', () => {
      expect([null, 1, null, undefined].filter(notNullish)).toHaveLength(1)
    })
  })

  describe('notUndefined', () => {
    it('should filter out undefined values', () => {
      expect([null, 1, null, undefined].filter(notUndefined)).toHaveLength(3)
    })
  })
  describe('isTruthy', () => {
    it('should return whether value is thruthy', () => {
      expect(isTruthy(0)).toBeFalsy()
      expect(isTruthy('')).toBeFalsy()
      expect([0, '', false].filter(isTruthy)).length(0)

      expect(isTruthy(1)).toBeTruthy()
      expect(isTruthy('hi')).toBeTruthy()
      expect([2, 'asasd', true].filter(isTruthy)).length(3)
    })
  })

  describe('isDate', () => {
    it('assert if is Date', () => {
      expect(isDate(new Date())).toBeTruthy()
      expect(isDate(undefined)).toBeFalsy()
    })
  })

  describe('isFunction', () => {
    it('assert if is Function', () => {
      function test() {}
      class Test {}

      expect(isFunction(test)).toBeTruthy()
      expect(isFunction(() => {})).toBeTruthy()
      expect(isFunction(new Test())).toBeFalsy()
      expect(isFunction(undefined)).toBeFalsy()
    })
  })

  describe('isIntegerKey', () => {
    it('assert if is IntegerKey', () => {
      expect(isIntegerKey('0')).toBeTruthy()
      expect(isIntegerKey('10')).toBeTruthy()
      expect(isIntegerKey('10.232')).toBeFalsy()
      expect(isIntegerKey(0)).toBeFalsy()
      expect(isIntegerKey('-10')).toBeFalsy()
      expect(isIntegerKey('NaN')).toBeFalsy()
      expect(isIntegerKey(NaN)).toBeFalsy()
      expect(isFunction(undefined)).toBeFalsy()
    })
  })

  describe('isMap', () => {
    it('assert if is Map', () => {
      expect(isMap(new Map())).toBeTruthy()
      expect(isMap(new WeakMap())).toBeFalsy()
      expect(isMap({})).toBeFalsy()
    })
  })

  describe('isObject', () => {
    it('assert if is Object', () => {
      class Test {}

      expect(isObject({})).toBeTruthy()
      expect(isObject(new Test())).toBeTruthy()
      expect(isObject([])).toBeTruthy()
      // eslint-disable-next-line no-new-wrappers
      expect(isObject(new Boolean(true))).toBeTruthy()
      // eslint-disable-next-line no-new-wrappers
      expect(isObject(new Number(0))).toBeTruthy()
      // eslint-disable-next-line no-new-wrappers
      expect(isObject(new String(''))).toBeTruthy()
      expect(isObject(new Date())).toBeTruthy()
      expect(isObject(/test/)).toBeTruthy()

      expect(isObject(() => {})).toBeFalsy()
      expect(isObject('')).toBeFalsy()
    })
  })

  describe('isPlainObject', () => {
    it('assert if is PlainObject', () => {
      class Test {}

      expect(isPlainObject({})).toBeTruthy()
      expect(isPlainObject(new Test())).toBeTruthy()
      expect(isPlainObject([])).toBeFalsy()
      // eslint-disable-next-line no-new-wrappers
      expect(isPlainObject(new Boolean(true))).toBeFalsy()
      // eslint-disable-next-line no-new-wrappers
      expect(isPlainObject(new Number(0))).toBeFalsy()
      // eslint-disable-next-line no-new-wrappers
      expect(isPlainObject(new String(''))).toBeFalsy()
      expect(isPlainObject(new Date())).toBeFalsy()
      expect(isPlainObject(/test/)).toBeFalsy()

      expect(isPlainObject(() => {})).toBeFalsy()
      expect(isPlainObject('')).toBeFalsy()
    })
  })

  describe('isPromise', () => {
    it('assert if is Promise', () => {
      const test = new Promise(() => {})
      const testFn = () => {}

      expect(isPromise(test)).toBeTruthy()
      expect(isPromise(testFn)).toBeFalsy()
    })
  })

  describe('isSet', () => {
    it('assert if is Set', () => {
      expect(isSet(new Set([]))).toBeTruthy()
      expect(isSet([])).toBeFalsy()
    })
  })

  describe('isString', () => {
    it('assert if is String', () => {
      expect(isString('')).toBeTruthy()
      expect(isString('asdasd')).toBeTruthy()
      expect(isString(`asdasd${0}`)).toBeTruthy()

      expect(isString(String(0))).toBeTruthy()
      // eslint-disable-next-line no-new-wrappers
      expect(isString(new String(''))).toBeFalsy()
      expect(isString(0)).toBeFalsy()
    })
  })

  describe('isSymbol', () => {
    it('assert if is Symbol', () => {
      expect(isSymbol(Symbol(''))).toBeTruthy()
      expect(isSymbol('')).toBeFalsy()
    })
  })
})

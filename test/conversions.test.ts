import { describe, expect, it, suite } from 'vitest'
import { toNumber, toRawType, toTypeString } from '../src/converstion'

suite('conversions', () => {
  describe('toNumber', () => {
    it('coerce string to number', () => {
      expect(toNumber('0')).toBe(0)
      expect(toNumber('12')).toBe(12)
    })

    it('return original value if NaN', () => {
      expect(toNumber(false)).toBe(false)
      expect(toNumber(undefined)).toBe(undefined)
      expect(toNumber(undefined)).toBe(undefined)
    })
  })

  describe('toTypeString', () => {
    it('objects should return [object Object]', () => {
      expect(toTypeString({})).toBe('[object Object]')
    })

    it('arrays should return [object Array]', () => {
      expect(toTypeString([])).toBe('[object Array]')
    })

    it('strings should return [object String]', () => {
      expect(toTypeString('')).toBe('[object String]')
      expect(toTypeString('value')).toBe('[object String]')
    })

    it('numbers should return [object Number]', () => {
      expect(toTypeString(0)).toBe('[object Number]')
      expect(toTypeString(1)).toBe('[object Number]')
    })

    it('booleans should return [object Boolean]', () => {
      expect(toTypeString(false)).toBe('[object Boolean]')
      expect(toTypeString(true)).toBe('[object Boolean]')
    })

    it('sets should return [object Set]', () => {
      expect(toTypeString(new Set())).toBe('[object Set]')
    })

    it('maps should return [object Map]', () => {
      expect(toTypeString(new Map())).toBe('[object Map]')
    })

    it('weakMaps should return [object WeakMap]', () => {
      expect(toTypeString(new WeakMap())).toBe('[object WeakMap]')
    })

    it('regex should return [object RegExp]', () => {
      expect(toTypeString(/asd/)).toBe('[object RegExp]')
    })
  })

  describe('toRawType', () => {
    it('returns string of the raw type of an object', () => {
      expect(toRawType([])).toBe('Array')
      expect(toRawType(new Map())).toBe('Map')
    })
  })
})

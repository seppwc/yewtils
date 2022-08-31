import {
  beforeEach,
  describe,
  expect,
  it,
  suite,
  vi,
} from 'vitest'
import {
  EMPTY_ARR,
  EMPTY_OBJ,
  NO,
  NO_OP,
  hasChanged,
  invokeArrayFns,
  remove,
} from '../src/functions'

const spy = vi.fn()

suite('functions', () => {
  beforeEach(() => {
    spy.mockClear()
  })

  describe('EMPTY_ARR', () => {
    it('should be an empty array', () => {
      expect(EMPTY_ARR).toHaveLength(0)
      expect(EMPTY_ARR).toBeInstanceOf(Array)
    })

    it('should not be able to be modified', () => {
      function test() {
        // @ts-expect-error EMPTY_ARR SHOULD BE READONLY
        EMPTY_ARR.push('hi')
      }

      expect(test).toThrowError()
    })
  })
  describe('EMPTY_OBJ', () => {
    it('should be an empty object', () => {
      expect(Object.keys(EMPTY_OBJ)).toHaveLength(0)
      expect(EMPTY_OBJ).toBeInstanceOf(Object)
    })

    it('should not be able to be modified', () => {
      function test() {
        // @ts-expect-error EMPTY_ARR SHOULD BE READONLY
        EMPTY_ARR.hi = 'hi'
      }

      expect(test).toThrowError()
    })
  })
  describe('NO', () => {
    it('should be a function', () => {
      expect(NO).toBeInstanceOf(Function)
    })

    it('should only return false', () => {
      expect(NO()).toBe(false)
    })
  })
  describe('NO_OP', () => {
    it('should be a function', () => {
      expect(NO_OP).toBeInstanceOf(Function)
    })

    it('should return undefined', () => {
      expect(NO_OP()).toBe(undefined)
    })
  })
  describe('hasChanged', () => {
    it('should return false if the values are the same', () => {
      expect(hasChanged(1, 1)).toBe(false)
    })

    it('should return tre if the values are different', () => {
      expect(hasChanged(1, 2)).toBe(true)
    })
  })
  describe('invokeArrayFns', () => {
    it('should call all functions passed to it', () => {
      const input = [spy, spy, spy]

      invokeArrayFns(input, ['hi'])

      expect(spy).toHaveBeenCalledTimes(3)
    })

    it('should call all functions passed to it', () => {
      const input = [spy, spy, spy]

      invokeArrayFns(input, ['hi'])

      expect(spy).toHaveBeenCalledWith(['hi'])
    })

    it('should call all functions passed to it', () => {
      const input = [spy, spy, spy] as Array<((s: string) => void)>

      invokeArrayFns(input, 'hi')

      expect(spy).toHaveBeenCalledWith('hi')
    })

    it('should call all functions passed to it', () => {
      const input = [spy, spy, spy]

      invokeArrayFns(input)

      expect(spy).toHaveBeenCalledWith()
    })
  })
  describe('remove', () => {
    it('should remove item from array', () => {
      const a = { a: 1 }
      const b = { b: 2 }
      const c = { c: 3 }

      const input = [a, b, c]

      remove(input, b)

      expect(input).toHaveLength(2)
      expect(input[0]).toHaveProperty('a', 1)
      expect(input[1]).toHaveProperty('c', 3)
    })
  })
})

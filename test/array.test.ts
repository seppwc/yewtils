import {
  describe,
  expect,
  it,
  suite,
} from 'vitest'
import {
  at,
  last,
  range,
} from '../src/array'

suite('array', () => {
  describe('at', () => {
    it('should return value at position in array', () => {
      const arr = [0, 1, 2, 3, 'hi', 5]

      expect(at(arr, 1)).toEqual(1)
      expect(at(arr, 4)).toEqual('hi')
    })

    it('should accept negative value and return value counting from end of array', () => {
      const arr = [0, 1, 2, 3, 'hi', 5]

      expect(at(arr, -1)).toEqual(5)
      expect(at(arr, -2)).toEqual('hi')
    })
  })

  describe('last', () => {
    it('should return the last element of an array', () => {
      const arr = [0, 1, 2, 3, 4, 5]

      const arr2 = ['one', 'two', 'three']
      expect(last(arr)).toEqual(5)
      expect(last(arr2)).toEqual('three')
    })
  })

  describe('range', () => {
    it('should accept one number param (N) and create a range from 0 - N', () => {
      expect(range(10)).toHaveLength(10)
      expect(range(2)).toMatchObject([0, 1])
    })

    it('should accept two number param (Start, End) and create a range from Start - End', () => {
      expect(range(1, 5)).toHaveLength(4)
      expect(range(1, 5)).toMatchObject([1, 2, 3, 4])
    })
  })
})

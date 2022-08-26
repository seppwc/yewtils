import { describe, expect, it, suite } from 'vitest'
import { defineProperty, extend, hasOwnProperty } from '../src'

suite('aliases', () => {
  describe('defineProperty', () => {
    it('should defineProperty', () => {
      const test = { value: '0' }

      defineProperty(test, 'test', true)

      expect(test).toHaveProperty('test', true)
    })
  })

  describe('hasOwnProperty', () => {
    it('should check if it has property', () => {
      const test = { value: '0' }

      defineProperty(test, 'test', true)

      expect(hasOwnProperty(test, 'test')).toBeTruthy()
    })
  })

  describe('extends', () => {
    it('should extend one object from another', () => {
      const test1 = { value: '0' }

      const test2 = { test: true }

      extend(test1, test2)

      expect(test1).toHaveProperty('test', true)
    })
  })
})

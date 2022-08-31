import {
  describe,
  expect,
  it,
  suite,
} from 'vitest'
import {
  createHash,
  toCamelCase,
  toKebabCase,
  toPascalCase,
} from '../src'

suite('strings', () => {
  /**
   *
   *  toKababCase
   *
   */

  describe('toKebabCase', () => {
    it('should covert camelCase strings', () => {
      expect(toKebabCase('helloWorld')).toEqual('hello-world')
    })

    it('should covert snake_case strings', () => {
      expect(toKebabCase('hello_world')).toEqual('hello-world')
    })

    it('should covert PascalCase strings', () => {
      expect(toKebabCase('HelloWorld')).toEqual('hello-world')
    })

    it('should covert ALLCAP strings', () => {
      expect(toKebabCase('HELLO_WORLD')).toEqual('hello-world')
      expect(toKebabCase('HELLO-WORLD')).toEqual('hello-world')
      expect(toKebabCase('HELLO WORLD')).toEqual('hello-world')
    })

    it('should not convert ALLCAPS with no space idenifier', () => {
      expect(toKebabCase('HELLOWORLD')).toEqual('helloworld')
    })

    it('should covert spaced strings strings', () => {
      expect(toKebabCase('Hello World')).toEqual('hello-world')
    })

    it('should return the original value if no match', () => {
      expect(toKebabCase('')).toEqual('')
    })
  })

  /**
   *
   *  toCamelCase
   *
   */
  describe('toCamelCase', () => {
    it('should covert kebab case strings', () => {
      expect(toCamelCase('hello-world')).toEqual('helloWorld')
    })

    it('should covert snake_case strings', () => {
      expect(toCamelCase('hello_world')).toEqual('helloWorld')
    })

    it('should covert PascalCase strings', () => {
      expect(toCamelCase('HelloWorld')).toEqual('helloWorld')
    })

    it('should covert ALLCAP strings', () => {
      expect(toCamelCase('HELLO_WORLD')).toEqual('helloWorld')
      expect(toCamelCase('HELLO-WORLD')).toEqual('helloWorld')
      expect(toCamelCase('HELLO WORLD')).toEqual('helloWorld')
    })

    it('should not convert ALLCAPS with no space idenifier', () => {
      expect(toKebabCase('HELLOWORLD')).not.toEqual('helloWorld')
    })

    it('should covert spaced strings strings', () => {
      expect(toCamelCase('Hello World')).toEqual('helloWorld')
    })

    it('should return the original value if no match', () => {
      expect(toCamelCase('')).toEqual('')
    })
  })

  /**
   *
   *  toPascalCase
   *
   */
  describe('toPascalCase', () => {
    it('should covert kebab case strings', () => {
      expect(toPascalCase('hello-world')).toEqual('HelloWorld')
    })

    it('should covert snake_case strings', () => {
      expect(toPascalCase('hello_world')).toEqual('HelloWorld')
    })

    it('should covert camelCase strings', () => {
      expect(toPascalCase('helloWorld')).toEqual('HelloWorld')
    })

    it('should covert ALLCAP strings', () => {
      expect(toPascalCase('HELLO_WORLD')).toEqual('HelloWorld')
      expect(toPascalCase('HELLO-WORLD')).toEqual('HelloWorld')
      expect(toPascalCase('HELLO WORLD')).toEqual('HelloWorld')
    })

    it('should not convert ALLCAPS with no space idenifier', () => {
      expect(toPascalCase('HELLOWORLD')).not.toEqual('HelloWorld')
    })

    it('should covert spaced strings strings', () => {
      expect(toPascalCase('Hello World')).toEqual('HelloWorld')
    })

    it('should return the original value if no match', () => {
      expect(toPascalCase('')).toEqual('')
    })
  })

  /**
   *
   * hash
   *
   */

  describe('hash', () => {
    it('should create a predictible hash from a string', () => {
      expect(createHash('this is a test hash')).toEqual('6289bcdc')
    })

    it('should return the same hash when presented with the same string', () => {
      const res = Array(10).fill('this is a test hash').map(value => createHash(value)).every(v => v === '6289bcdc')
      expect(res).toEqual(true)
    })

    it('should return different hashes when presented with different strings', () => {
      const input = ['string-1', 'string-2', 'string-3', 'string-4']

      const res = input.map(value => createHash(value))

      expect(res).toHaveLength(4)

      const resSet = new Set(res)

      expect(resSet).toHaveLength(4)

      const secondRes = input.map(value => createHash(value))

      expect(secondRes).toHaveLength(4)

      const secondResSet = new Set(secondRes)

      expect(secondResSet).toHaveLength(4)

      res.forEach((v, i) => {
        expect(v === secondRes[i]).toBe(true)
      })
    })
  })
})


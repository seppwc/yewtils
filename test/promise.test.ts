import { performance } from 'perf_hooks'
import {
  describe,
  expect,
  it,
  suite,

} from 'vitest'
import { sleep } from '../src'

suite('promise', () => {
  describe('sleep', () => {
    it('should sleep for N seconds before calling callback', () => {
      const start = performance.now()

      sleep(1000, () => {
        const end = performance.now()
        const result = start - end
        expect(result).toBeGreaterThan(1000)
      })
    })
  })
})

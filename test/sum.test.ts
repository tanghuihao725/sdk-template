import { sum } from '../src/index'

test('sum test 1', () => {
  expect(sum(1,1)).toBe(2)
})

test('sum test 2', () => {
  expect(sum(1, 1, 1)).toBe(3)
})

// 错误测试样例 
test('sum test 3', () => {
  expect(sum(1, 1, 1)).toBe(5)
})

test('sum test 4', () => {
  expect(sum(1,1)).toBe(2)
})
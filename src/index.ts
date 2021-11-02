export const sum = (...numbers: number[])=> {
  return numbers.reduce((pre, cur) => pre + cur, 0)
}
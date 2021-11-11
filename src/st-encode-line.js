import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let mas = str.split('')

  let count 
  let current
  let res = []

  for (let i=0; i < mas.length; i++) {
    current = mas[i]
    count = 0
    while (current === mas[i]) {
      count++
      i++
    }
    i--
    count > 1  ?  (res.push(count +current)) : (res.push(current))
  }
  return res.join('')
}

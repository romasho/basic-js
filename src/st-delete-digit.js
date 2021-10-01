import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(y) {
  
  let n = y.toString()
  let max = 0
  for (let i = 0; i < n.length; i++) {
    let n = y.toString()
   n = n.replace(n[i], '')
    if (Number(n) > max) {
      max = n
    }
    
  }
  return Number(max)
}

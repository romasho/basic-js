import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  
  calculateDepth(arr, count = 1) {
    let currentDepth = count
    for (let i = 0; i < arr.length; i++){
      if (arr[i] instanceof Array) { 
       let newCount = this.calculateDepth(arr[i], count+1)
       if (newCount > currentDepth) {currentDepth = newCount}
      }
      
    } return currentDepth
  }
}

// const Calc = new DepthCalculator()

// console.log(Calc.calculateDepth(([1, 2, 3, [8, [2]], 4, 5, []])))


// node recursive-depth.js
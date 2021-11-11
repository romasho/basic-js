import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
 
  const result = JSON.parse(JSON.stringify(matrix))

 

  for (let i = 0; i < matrix.length; i++) {
    for ( let x = 0; x < matrix[i].length; x++) {
        result[i][x] = 0
    }
  }
// console.log(result)
// console.log(matrix)


  for (let i = 0; i < matrix.length; i++) {
    for ( let x = 0; x < matrix[i].length; x++) {
        if (matrix[i - 1]) {

            if (matrix[i - 1][x - 1] === true) {result[i][x]++}
            if (matrix[i - 1][x] === true) {result[i][x]++}
            if (matrix[i - 1][x + 1] === true) {result[i][x]++}
        }

        if (matrix[i]) {
            if (matrix[i][x- 1] === true) {result[i][x]++}
            if (matrix[i][x+ 1] === true) {result[i][x]++}
        }

        if (matrix[i + 1]) {
            if (matrix[i + 1][x- 1] === true) {result[i][x]++}
            if (matrix[i + 1][x] === true) {result[i][x]++}
            if (matrix[i + 1][x+ 1] === true) {result[i][x]++}
        }
    }}
  return result
}



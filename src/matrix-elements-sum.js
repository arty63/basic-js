const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

 function getMatrixElementsSum(matrix) {
  let counter = 0
  let arr =[]
  for (let i=0; i<matrix[0].length; i++){
    let inside = []
    for (let j = 0; j<matrix.length; j++){
      inside.push(matrix[j][i])
      
    }arr.push(inside)
    
  }for (let elem of arr) {
    for (let el of elem) {
      if (el === 0) break;
      counter += el;
    }
  }
  return counter;
}

module.exports = {
  getMatrixElementsSum
};

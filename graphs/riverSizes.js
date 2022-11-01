// O(wh) time, where w = width of matrix and h = height of matrix
// O(wh) space, due to recursive calls on the callstack
// * mutates input matrix *

function riverSizes(matrix) {

  const riverSizes = [];
  let size = 0;

  function recursiveFunction(row, col) {
    if (row >= 0 && row < matrix.length) {
      if (col >= 0 && col < matrix[row].length) {
        if (matrix[row][col] === 1) {
          size += 1;
          matrix[row][col] = 'X';
          recursiveFunction(row - 1, col);
          recursiveFunction(row + 1, col);
          recursiveFunction(row, col - 1);
          recursiveFunction(row, col + 1);
        }
      }
    }
  }

  for (let row = 0; row < matrix.length; row += 1) {
    for (let col = 0; col < matrix[row].length; col += 1) {
      size = 0;
      recursiveFunction(row, col);
      if (size > 0) riverSizes.push(size);
    }
  }

  return riverSizes;
}
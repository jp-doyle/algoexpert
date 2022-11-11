// O(w + h) time, where w = width of matrix, and h = height of matrix
// O(1) space

function searchInSortedMatrix(matrix, target) {

  let rowIndex = matrix.length - 1;
  let columnIndex = 0;

  while (columnIndex < matrix[0].length && rowIndex > -1) {
    const value = matrix[rowIndex][columnIndex];
    if (value === target) {
      return [rowIndex, columnIndex];
    } else if (value < target) {
      columnIndex += 1;
    } else {
      rowIndex -= 1;
    }
  }

  return [-1, -1]
}
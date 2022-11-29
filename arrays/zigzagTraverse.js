// O(n) time, where n = number of elements in input array, which is a matrix
// O(n) space

function zigzagTraverse(array) {

  const result = [];
  let rowIdx = 0;
  let colIdx = 0;
  let direction = 'downLeft';
  const rows = array.length;
  const columns = array[0].length;
  const finalCoordinates = [rows.toString() + (columns - 1).toString(), (rows - 1).toString() + columns.toString()];

  while (rowIdx.toString() + colIdx.toString() !== finalCoordinates[0] && rowIdx.toString() + colIdx.toString() !== finalCoordinates[1]) {

    if (inMatrix(rowIdx,colIdx,array)) {
      if (direction === 'downLeft') {
        result.push(array[rowIdx][colIdx]);
        rowIdx += 1;
        colIdx -= 1;
      } else {
        result.push(array[rowIdx][colIdx]);
        rowIdx -= 1;
        colIdx += 1;
      }
    } else {
      if (direction === 'downLeft') {
        if (colIdx === -1 && rowIdx < rows) {
          colIdx += 1;
        } else {
          rowIdx -= 1;
          colIdx += 2;
        }
        direction = 'upRight';
      } else {
        if (colIdx === array[rows - 1].length) {
          rowIdx += 2;
          colIdx -= 1;
        } else {
          rowIdx += 1;
        }
        direction = 'downLeft';
      }
    }
  }

  return result;
}

function inMatrix(rowIndex, colIndex, arr) {
  if (rowIndex <= -1 || rowIndex >= arr.length) return false;
  if (colIndex <= -1 || colIndex >= arr[0].length) return false;
  return true;
}
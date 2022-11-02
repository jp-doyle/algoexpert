// O(wh) time, where w = width of matrix, and h = height of matrix
// O(wh) space

function removeIslands(matrix) {

  let island = true;

  function isIsland(row, col) {
    if (row >= 0 && row < matrix.length) {
      if (col >= 0 && col < matrix[row].length) {
        if (matrix[row][col] === 1) {
          matrix[row][col] = 'X';
          if (row === 0 || row === matrix.length - 1) {
            island = false;
          }
          if (col === 0 || col === matrix[row].length - 1) {
            island = false;
          }
          isIsland(row - 1, col);
          isIsland(row + 1, col);
          isIsland(row, col - 1);
          isIsland(row, col + 1);
        }
      }
    }
  }

  function remove(row, col) {
    if (row >= 0 && row < matrix.length) {
      if (col >= 0 && col < matrix[row].length) {
        if (matrix[row][col] === 'X') {
          matrix[row][col] = 0;
          remove(row - 1, col);
          remove(row + 1, col);
          remove(row, col - 1);
          remove(row, col + 1);
        }
      }
    }
  }

  for (let r = 0; r < matrix.length; r += 1) {
    for (let c = 0; c < matrix[r].length; c += 1) {
      if (matrix[r][c] === 1) {
        island = true;
        isIsland(r,c);
        if (island) remove(r,c);
      }
    }
  }

  for (let r = 0; r < matrix.length; r += 1) {
    for (let c = 0; c < matrix[r].length; c += 1) {
      if (matrix[r][c] === 'X') {
        matrix[r][c] = 1;
      }
    }
  }

  return matrix;
}
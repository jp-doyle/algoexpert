// O((wh)^2) time, where w = matrix width, and h = matrix height
// O(wh) space
// *Less than optimal, brute force solution*

function minimumPassesOfMatrix(matrix) {

  let passes = 0;
  let negatives = 0;
  function canBeConverted(row,col) {
    let yes = false;
    if (matrix[row - 1] && matrix[row - 1][col] > 0) return true;
      else if (matrix[row + 1] && matrix[row + 1][col] > 0) return true;
      else if (matrix[row][col - 1] && matrix[row][col - 1] > 0) return true;
      else if (matrix[row][col + 1] && matrix[row][col + 1] > 0) return true;
    return false;
  }

  for (const row of matrix) {
    for (const int of row) {
      if (int < 0) negatives += 1;
    }
  }

  while (negatives > 0) {
    const prevNegatives = negatives;
    const coordinatesOfEligibleNegatives = [];

    for (let r = 0; r < matrix.length; r += 1) {
      for (let c = 0; c < matrix[r].length; c += 1) {
        if (matrix[r][c] < 0) {
          if (canBeConverted(r,c)) {
            coordinatesOfEligibleNegatives.push([r,c]);
          }
        }
      }
    }

    for (const coordinates of coordinatesOfEligibleNegatives) {
      const row = coordinates[0];
      const col = coordinates[1];
      matrix[row][col] = matrix[row][col] * -1;
    }

    negatives -= coordinatesOfEligibleNegatives.length;
    passes += 1;
    if (negatives === prevNegatives) return -1;
  }

  return passes;
}
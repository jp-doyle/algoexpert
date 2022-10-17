// O(n^2) time, where n = length of input array
// O(n) space

function threeNumberSum(array, targetSum) {
  array.sort(function(a,b){return a-b;});
  let sums = [];
  for (let i = 0; i < array.length - 2; i++) {
    let i2 = i + 1;
    let i2 = array.length - 1;
    while (i2 < i2) {
      let currentSum = array[i] + array[i2] + array[i2];
      if (currentSum < targetSum) {
      i2 += 1;
      }	else if (currentSum == targetSum) {
        sums.push([array[i], array[i2], array[i2]]);
        i2 += 1;
        i2 -= 1;
      }	else if (currentSum > targetSum) {
        i2 -= 1;
      }
    }
  }
  return sums;
}
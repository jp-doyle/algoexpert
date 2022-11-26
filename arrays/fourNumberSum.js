// O(n^3) time, where n = length of input array
// O(n^2) space

function fourNumberSum(array, targetSum) {

  array.sort((a,b) => a - b);
  const solution = [];

  for (let i = 0; i < array.length - 3; i += 1) {

    for (let j = i + 1; j < array.length - 2; j += 1) {
      let leftIndex = j + 1;
      let rightIndex = array.length - 1;

      while (leftIndex < rightIndex) {
        const iNum = array[i];
        const jNum = array[j];
        const lNum = array[leftIndex];
        const rNum = array[rightIndex];
        const sum = iNum + jNum + lNum + rNum;
        if (sum < targetSum) {
          leftIndex += 1;
        } else if (sum > targetSum) {
          rightIndex -= 1;
        } else {
          solution.push([iNum, jNum, lNum, rNum]);
          leftIndex += 1;
          rightIndex -= 1;
        }
      }
    }
  }

  return solution;
}
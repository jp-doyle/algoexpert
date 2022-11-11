// O(log(n)) time, where n = length of input array
// O(1) space

function searchForRange(array, target) {

  let leftIndex = 0;
  let rightIndex = array.length - 1;
  let middleIndex;
  let firstTargetIndex = -1;
  let lastTargetIndex = -1;
  let leftNum, rightNum, middleNum;

  if (array[0] > target || array[array.length - 1] < target) {
    return [firstTargetIndex, lastTargetIndex];
  }

  while (leftIndex < rightIndex) {
    leftNum = array[leftIndex];
    rightNum = array[rightIndex];
    if (leftIndex + 1 === rightIndex) {
      if (leftNum === target) {
        firstTargetIndex = leftIndex;
      } else if (rightNum === target) {
        firstTargetIndex = rightIndex;
      }
      break;
    }
    middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    middleNum = array[middleIndex];
    if (middleNum >= target) rightIndex = middleIndex;
      else leftIndex = middleIndex;
  }

  leftIndex = 0;
  rightIndex = array.length - 1;

  while (leftIndex < rightIndex) {
    leftNum = array[leftIndex];
    rightNum = array[rightIndex];
    if (leftIndex + 1 === rightIndex) {
      if (rightNum === target) {
        lastTargetIndex = rightIndex;
      } else if (leftNum === target) {
        lastTargetIndex = leftIndex;
      }
      break;
    }
    middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    middleNum = array[middleIndex];
    if (middleNum <= target) leftIndex = middleIndex;
      else rightIndex = middleIndex;
  }

  return [firstTargetIndex, lastTargetIndex];
}
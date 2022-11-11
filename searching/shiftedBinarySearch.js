// O(log(n)) time
// O(1) space

function shiftedBinarySearch(array, target) {

  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < rightIndex) {

    let middleIndex, middleNum;
    let leftNum = array[leftIndex];
    let rightNum = array[rightIndex];

    if (leftNum === target) return leftIndex;
    if (rightNum === target) return rightIndex;
    middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    middleNum = array[middleIndex];
    if (array[middleIndex] === target) return middleIndex;

    if (leftNum < array[middleIndex]) {
      if (target > leftNum && target < middleNum) {
        rightIndex = middleIndex - 1;
      } else {
        leftIndex = middleIndex + 1;
      }
    } else if (array[middleIndex] < rightNum) {
        if (target > middleNum && target < rightNum) {
          leftIndex = middleIndex + 1;
        } else {
          rightIndex = middleIndex - 1;
        }
    }
  }
  return -1;
}
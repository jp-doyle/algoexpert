// O(log(n)) time, where n = length of input array
// O(1) space

function binarySearch(array, target) {

  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (array[middleIndex] === target) {
      return middleIndex;
    } else if (array[middleIndex] < target) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
}
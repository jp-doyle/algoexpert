// O(n) time, where n = length of input array
// O(1) space

function moveElementToEnd(array, toMove) {

  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < rightIndex) {
    while (array[rightIndex] && array[rightIndex] === toMove) rightIndex -= 1;
    while (array[leftIndex] && array[leftIndex] !== toMove) leftIndex += 1;
    if (leftIndex < rightIndex) {
      array[leftIndex] = array[rightIndex];
      array[rightIndex] = toMove;
      rightIndex -= 1;
      leftIndex += 1;
    }
  }
  return array;
}
// O(n^2) time, where n = length of input array
// O(1) space

function insertionSort(array) {

  for (let index = 1; index < array.length; index += 1) {
    let currentIndex = index;
    let leftIdx = index - 1;

    while (leftIdx >= 0 && (array[currentIndex] < array[leftIdx])) {
      swap(leftIdx, currentIndex, array);
      leftIdx -= 1;
      currentIndex -= 1;
    }
  }

  return array;
}

function swap(leftIndex, rightIndex, array) {

  const temp = array[rightIndex];
  array[rightIndex] = array[leftIndex];
  array[leftIndex] = temp;
}
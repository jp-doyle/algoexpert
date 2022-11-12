// O(n^2) time, where n = length of input array
// O(1) space

function bubbleSort(array) {

  let swapPerformed = true;

  while (swapPerformed) {
    let swapped = false;

    for (let index = 0; index < array.length - 1; index += 1) {
      if (array[index] > array[index + 1]) {
        swap(index, index + 1, array);
        swapped = true;
      }
    }
    swapped ? swapPerformed = true : swapPerformed = false;
  }

  return array;
}

function swap(leftIndex, rightIndex, array) {

  const temp = array[rightIndex];
  array[rightIndex] = array[leftIndex];
  array[leftIndex] = temp;
}
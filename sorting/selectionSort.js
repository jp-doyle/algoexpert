// O(n^2) time
// O(1) space

function selectionSort(array) {

  let index = 0;

  while (index < array.length - 1) {
    let indexOfSmallest = index;
    for (let i = index; i < array.length; i += 1) {
      if (array[i] < array[indexOfSmallest]) {
        indexOfSmallest = i;
      }
    }
    const num = array.splice(indexOfSmallest,1);
    array.splice(index, 0, num[0]);
    index += 1;
  }

  return array;
}
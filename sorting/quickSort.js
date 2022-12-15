function quickSort(array, originalLeftIndex = 0, originalRightIndex = array.length - 1) {

  if (originalRightIndex < originalLeftIndex) return;
  let leftIndex = originalLeftIndex;
  let rightIndex = originalRightIndex - 1;
  const pivotIndex = rightIndex + 1;
  const pivotValue = array[pivotIndex];

  while (leftIndex <= rightIndex) {
    const leftValue = array[leftIndex];
    const rightValue = array[rightIndex];

    if (leftValue <= pivotValue) leftIndex += 1;
    if (rightValue >= pivotValue) rightIndex -= 1;
    if (leftValue > pivotValue && rightValue < pivotValue) {
      swapValues(array, leftIndex, rightIndex);
      leftIndex += 1;
      rightIndex -= 1;
    }
  }

  swapValues(array, leftIndex, pivotIndex);
  quickSort(array, originalLeftIndex, leftIndex - 1);
  quickSort(array, leftIndex + 1, originalRightIndex);
  return array;
}

function swapValues(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
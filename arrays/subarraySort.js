// O(n) time, where n = length of input array
// O(1) space

function subarraySort(array) {

  let minValueOutOfOrder = -1;
  let maxValueOutOfOrder = -1;
  let startingIndex, endingIndex;

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < array[i - 1]) {
      if (minValueOutOfOrder === -1) {
        minValueOutOfOrder = array[i];
      } else {
        if (array[i] < minValueOutOfOrder) {
          minValueOutOfOrder = array[i];
        }
      }
    }
  }

  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (array[i] < array[i - 1]) {
      if (maxValueOutOfOrder === -1) {
        maxValueOutOfOrder = array[i - 1];
      } else {
        if (array[i - 1] > maxValueOutOfOrder) {
          maxValueOutOfOrder = array[i - 1];
        }
      }
    }
  }

  if (minValueOutOfOrder === -1) return [-1, -1];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > minValueOutOfOrder) {
      startingIndex = i;
      break;
    }
  }

  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (array[i] < maxValueOutOfOrder) {
      endingIndex = i;
      break;
    }
  }

  return [startingIndex, endingIndex];
}
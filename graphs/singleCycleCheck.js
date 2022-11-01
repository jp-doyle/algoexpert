// O(n) time, where n = length of input array
// O(1) space

function hasSingleCycle(array) {

  let sumOfIndices = 0;
  let i = 0;

  while (i < array.length) {
    sumOfIndices += i;
    i += 1;
  }

  let sumOfVisitedIndices = 0;
  let counter = 0;
  let index = 0;

  while (counter < array.length) {
    sumOfVisitedIndices += index;
    let move = array[index];
    if (Math.abs(move) > array.length) {
      move = move % array.length;
    }
    index = index + move;
    if (index > array.length - 1) {
      index = index - array.length;
    }
    else if (index < 0) {
      index = array.length + index;
    }
    counter += 1;
  }
  return sumOfIndices === sumOfVisitedIndices && index === 0;
}
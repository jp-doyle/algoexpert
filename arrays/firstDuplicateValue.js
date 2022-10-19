// O(n) time, where n = length of input array
// O(1) space

function firstDuplicateValue(array) {
  for (let i = 0; i < array.length; i += 1) {
    const number = Math.abs(array[i]);
    if (array[number - 1] < 0) return number;
    else array[number - 1] *= -1;
  }
  return -1;
}
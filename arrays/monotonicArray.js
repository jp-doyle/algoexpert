// O(n) time, where n = length of input array
// O(1) space

function isMonotonic(array) {

  let decreasing = false;
  let increasing = false;

  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i + 1] < array[i]) decreasing = true;
    else if (array[i + 1] > array[i]) increasing = true;

    if (decreasing && increasing) return false;
  }

  return true;
}
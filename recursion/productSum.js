// O(n), where n = length of input array
// O(d), where d = depth of most nested array in input array

function productSum(array, depth = 1) {

  let sum = 0;

  for (const element of array) {
    if (Number.isInteger(element)) sum += element;
    else sum += productSum(element, depth + 1);
  }

  return sum * depth;
}
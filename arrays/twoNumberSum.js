// O(n) time, where n = length of input array
// O(n) space, where n = length of input array

function twoNumberSum(array, targetSum) {
  const hashTable = {};

  for (const number of array) {
    const difference = targetSum - number;
    if (hashTable[number]) {
      return [number, difference];
    } else {
      hashTable[difference] = true;
    }
  }
  return [];
}
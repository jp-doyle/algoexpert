// O(n) time, where n = length of input array
// O(n) space

function largestRange(array) {

  const hashTable = {};
  let range = 0;
  let startAndStop = [0, 0];

  for (const int of array) {
    if (hashTable[int] === undefined) {
      hashTable[int] = false;
    }
  }

  for (const int of array) {
    if (hashTable[int] === false) {
      hashTable[int] = true;
      let newRange = 1;
      let start, stop;

      let smallerInt = int - 1;

      while (hashTable[smallerInt]) {
        hashTable[smallerInt] = true;
        smallerInt -= 1;
        newRange += 1;
      }
      start = smallerInt + 1;

      let largerInt = int + 1;

      while (hashTable[largerInt]) {
        hashTable[largerInt] = true;
        largerInt += 1;
        newRange += 1;
      }
      stop = largerInt - 1;

      if (newRange > range) {
        range = newRange;
        startAndStop[0] = start;
        startAndStop[1] = stop;
      }
    }
  }

  return startAndStop;
}
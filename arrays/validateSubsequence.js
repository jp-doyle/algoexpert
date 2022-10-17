// O(n) time, where n = length of input array
// O(1) space

function isValidSubsequence(array, sequence) {
  let sequenceIndex = 0;
  for (const number of array) {
    if (number === sequence[sequenceIndex]) sequenceIndex += 1;
    if (sequenceIndex === sequence.length) return true;
  }
  return sequenceIndex === sequence.length + 1;
}
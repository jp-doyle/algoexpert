// hard
// O(log(n)) time, where n = length of input array
// O(log(n)) space
// can be done iteratively in O(log(n)) time | O(1) space

function indexEqualsValue(array, leftIdx = 0, rightIdx = array.length - 1) {

  if (rightIdx < leftIdx) return -1;
  if (leftIdx === rightIdx) {
    if (leftIdx === array[leftIdx]) return leftIdx;
    else return -1;
  }
  const middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  const middleValue = array[middleIdx];
  if (middleValue === middleIdx) return indexEqualsValue(array, leftIdx, middleIdx);
  if (middleValue < middleIdx) return indexEqualsValue(array, middleIdx + 1, rightIdx);
  if (middleValue > middleIdx) return indexEqualsValue(array, leftIdx, middleIdx - 1);
}
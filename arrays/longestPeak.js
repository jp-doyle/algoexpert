// O(n) time, where n = length of input array
// O(1) space

function longestPeak(array) {

  let longestPeak = 0;
  let i = 1;

  while (i < array.length - 1) {
    let leftIndex = i;
    let rightIndex = i;

    while (array[leftIndex - 1] < array[leftIndex]) {
      leftIndex -= 1;
    }
    while (array[rightIndex + 1] < array[rightIndex]) {
      rightIndex += 1;
    }

    if (leftIndex < i && rightIndex > i) {
      const peakLength = rightIndex - leftIndex + 1;
      if (peakLength > longestPeak) {
        longestPeak = peakLength;
      }
    }
    i = rightIndex + 1;
  }
  return longestPeak;
}
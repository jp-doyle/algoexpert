// O(nlogn) time, where n = length of input array
// O(n) space

function mergeOverlappingIntervals(array) {

  const mergedIntervals = [];
  let i = 0;

  array.sort((a,b) => a[0] - b[0]);

  while (i < array.length) {
    const interval = [array[i][0], array[i][1]];
    let k = i + 1;

    while (k < array.length && array[k][0] <= interval[1]) {
      if (array[k][1] > interval[1]) interval[1] = array[k][1];
      k += 1;
    }
    mergedIntervals.push(interval);
    i = k;
  }
  return mergedIntervals;
}
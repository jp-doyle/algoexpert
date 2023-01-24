// medium
// O(n) time, where n = length of input array
// O(1) space

function maxSubsetSumNoAdjacent(array) {

  if (array.length === 0) return 0;
  else if (array.length === 1) return array[0];
  else {

    let sumAtIndexMinusTwo = array[0];
    let sumAtIndexMinusOne = Math.max(array[0], array[1]);

    let i = 2;
    while (i < array.length) {
      const previousSumAtIndexMinusOne = sumAtIndexMinusOne;
      sumAtIndexMinusOne = Math.max(sumAtIndexMinusOne, sumAtIndexMinusTwo + array[i]);
      sumAtIndexMinusTwo = previousSumAtIndexMinusOne;
      i += 1;
    }
    return sumAtIndexMinusOne;
  }
}
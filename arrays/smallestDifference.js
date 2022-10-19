// O(nlogn + mlogm) time, where n = length of arrayOne and m = length of arrayTwo
// O(1) space
function smallestDifference(arrayOne, arrayTwo) {

  arrayOne.sort((a,b) => a - b);
  arrayTwo.sort((a,b) => a - b);

  let indexOne = 0;
  let indexTwo = 0;
  let smallestDiff = Infinity;
  let solution;

  while (indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
    const arrOneNum = arrayOne[indexOne];
    const arrTwoNum = arrayTwo[indexTwo];
    if (Math.abs(arrOneNum - arrTwoNum) < smallestDiff) {
      smallestDiff = Math.abs(arrOneNum - arrTwoNum);
      solution = [arrOneNum, arrTwoNum];
    }

    if (arrOneNum < arrTwoNum) indexOne += 1;
    else if (arrOneNum > arrTwoNum) indexTwo += 1;
    else return [arrOneNum, arrTwoNum];
  }
  return solution;
}
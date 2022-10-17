// O(n) time, where n = length of input array
// O(n) space, where n = length of input array

function sortedSquaredArray(array) {

  const solution = new Array(array.length).fill('X');
  let solutionIndex = solution.length - 1;
  let smallestIndex = 0;
  let largestIndex = array.length - 1;

  while (smallestIndex < largestIndex) {

    const leftSquare = Math.pow(array[smallestIndex],2);
    const rightSquare = Math.pow(array[largestIndex],2);

    if (leftSquare < rightSquare) {
      solution[solutionIndex] = rightSquare;
      largestIndex -= 1;
    } else if (leftSquare > rightSquare) {
      solution[solutionIndex] = leftSquare;
      smallestIndex += 1;
    } else {
      solution[solutionIndex] = leftSquare;
      solution[solutionIndex - 1] = rightSquare;
      smallestIndex += 1;
      largestIndex -= 1;
      solutionIndex -= 1;
    }
    solutionIndex -= 1;
  }

  if (smallestIndex === largestIndex) {
    solution[solutionIndex] = Math.pow(array[largestIndex],2);
  }

  return solution;
}
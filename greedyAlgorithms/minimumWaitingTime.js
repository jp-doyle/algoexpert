// O(nlogn) time, where n = length of input (queries) `array
// O(1) space

function minimumWaitingTime(queries) {

  queries.sort((a,b) => a - b);

  let sum = 0;

  for (let i = 0; i < queries.length - 1; i += 1) {
    sum += queries[i] * (queries.length - 1 - i);
  }

  return sum;
}
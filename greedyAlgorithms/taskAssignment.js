// O(nlogn) time, where n = length of input tasks array
// O(n) space

function taskAssignment(k, tasks) {

  const optimalAssignment = [];

  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i] = [tasks[i], i];
  }

  tasks.sort((a,b) => a[0] - b[0]);

  let leftIndex = 0;
  let rightIndex = tasks.length - 1;
  while (leftIndex < rightIndex) {
    optimalAssignment.push([tasks[leftIndex][1], tasks[rightIndex][1]]);
    leftIndex += 1;
    rightIndex -= 1;
  }
  return optimalAssignment;
}
// O(n) time, where n = length of input array
// O(n) space

function nextGreaterElement(array) {

  const solution = new Array(array.length).fill(-1);
  const stack = [];

  for (let i = array.length - 2; i >= 0; i -= 1) {
    stack.push(array[i]);
  }

  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (array[i] < stack[stack.length - 1]) {
      solution[i] = stack[stack.length - 1];
    } else {
      while (stack.length > 0 && array[i] >= stack[stack.length - 1]) {
        stack.pop();
      }
      if (stack.length !== 0) solution[i] = stack[stack.length - 1];
    }
    stack.push(array[i]);
  }

  return solution;
}
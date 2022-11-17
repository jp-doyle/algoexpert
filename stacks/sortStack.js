// O(n^2) time, where n = length of input array (stack)
// O(n) space

function sortStack(stack) {

  if (stack.length === 0) return stack;
  const top = stack.pop();
  sortStack(stack);
  insertInStack(stack, top);
  return stack;
}

function insertInStack(stack, value) {

  if (stack.length === 0 || stack[stack.length - 1] <= value) {
    stack.push(value);
  } else {
    const top = stack.pop();
    insertInStack(stack, value);
    stack.push(top);
  }
}
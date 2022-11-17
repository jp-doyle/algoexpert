// O(n) time, where n = length of input string
// O(n) space

function balancedBrackets(string) {

  const stack = [];

  for (const char of string) {
    const lastChar = stack[stack.length - 1];
    switch (char) {
      case '(':
        stack.push(')');
        break;
      case '{':
        stack.push('}');
        break;
      case '[':
        stack.push(']');
        break;
      case ')':
        if (lastChar === ')') stack.pop();
        else return false;
        break;
      case '}':
        if (lastChar === '}') stack.pop();
        else return false;
        break;
      case ']':
        if (lastChar === ']') stack.pop();
        else return false;
        break;
    }
  }

  if (stack.length > 0) return false;
  return true;
}
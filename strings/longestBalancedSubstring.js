// very hard
// O(n) time, where n = length of string
// O(1) space

function longestBalancedSubstring(string) {

  let longest = 0;
  let open = 0;
  let close = 0;

  for (let i = 0; i < string.length; i += 1) {
    const paren = string[i];
    if (paren === '(') {
      open += 1;
    } else if (paren === ')' && open !== 0) {
      close += 1;
      if (close === open) {
        const length = open + close;
        if (length > longest) longest = length;
      } else if (close > open) {
        open = 0;
        close = 0;
      }
    }
  }

  open = 0;
  close = 0;
  for (let i = string.length - 1; i >= 0; i -= 1) {
    const paren = string[i];
    if (paren === ')') {
      open += 1;
    } else if (paren === '(' && open !== 0) {
      close += 1;
      if (close === open) {
        const length = open + close;
        if (length > longest) longest = length;
      } else if (close > open) {
        open = 0;
        close = 0;
      }
    }
  }

  return longest;
}
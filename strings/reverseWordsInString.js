// O(n) time
// O(n) space

function reverseWordsInString(string) {
  let solution = '';
  let i = string.length - 1;

  while (i >= 0) {
    const char = string[i];
    if (char === ' ') {
      solution += char;
      i -= 1;
    }
    else {
      let leftI = i - 1;
      while (leftI >= 0 && string[leftI] !== ' ') {
        leftI -= 1;
      }
      for (let j = leftI + 1; j < i + 1; j += 1) {
        solution += string[j];
      }
      i = leftI;
    }
  }

  return solution;
}
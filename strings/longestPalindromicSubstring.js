// medium
// O(n^3) time
// O(1) space
// can be solved in O(n^2) time and O(1) space

function longestPalindromicSubstring(string) {

  let startIndex = 0;
  let stopIndex = 0;

  for (let i = 0; i < string.length; i += 1) {
    for (let j = string.length - 1; j >= 0; j -= 1) {
      let leftIndex = i;
      let rightIndex = j;

      while (string[leftIndex] === string[rightIndex] && leftIndex <= rightIndex) {
        leftIndex += 1;
        rightIndex -= 1;
      }
      if (leftIndex > rightIndex) {
        if (j - i > stopIndex - startIndex) {
          startIndex = i;
          stopIndex = j;
        }
      }
    }
  }
  return string.slice(startIndex,stopIndex + 1);
}
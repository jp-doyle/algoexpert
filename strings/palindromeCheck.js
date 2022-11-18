// O(n) time, where n = length of input string
// O(1) space

function isPalindrome(string) {

  let leftIndex = 0;
  let rightIndex = string.length - 1;

  while (leftIndex <= rightIndex) {
    if (string[leftIndex] !== string[rightIndex]) {
      return false;
    }
    leftIndex += 1;
    rightIndex -= 1;
  }

  return true;
}
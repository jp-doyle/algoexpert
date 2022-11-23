// O(n) time, where n = length of input string
// O(n) space

function longestSubstringWithoutDuplication(string) {

  let substring = '';
  let i = 0;

  while (i < string.length) {
    const hashTable = {};
    hashTable[string[i]] = i;
    let rightI = i + 1;

    while (rightI < string.length && hashTable[string[rightI]] === undefined) {
      hashTable[string[rightI]] = rightI;
      rightI += 1;
    }
    const nextSubstring = string.slice(i,rightI);
    if (nextSubstring.length > substring.length) substring = nextSubstring;
    if (rightI === string.length) i = string.length;
    else i = hashTable[string[rightI]] + 1;
  }

  return substring;
}
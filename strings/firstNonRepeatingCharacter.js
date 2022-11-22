// O(n) time, where n = length of input string
// O(1) space

function firstNonRepeatingCharacter(string) {

  let hashTable = {};

  for (let letter of string) {
    if (hashTable[letter] == undefined) {
      hashTable[letter] = 1;
    } else {
      hashTable[letter]++;
    }
  }

  for (let key in hashTable) {
    if (hashTable[key] == 1) {
      return string.indexOf(key);
    }
  }

  return -1;
}
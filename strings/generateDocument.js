// O(n + m) time, where n = number of characters, and m = length of document
// O(c) space, where c = number of unique characters in characters input

function generateDocument(characters, document) {

  const hashTable = {};

  for (const character of characters) {
    if (hashTable[character] === undefined) hashTable[character] = 1;
    else hashTable[character] += 1;
  }

  for (const letter of document) {
    if (hashTable[letter] === undefined) return false;
    else if (hashTable[letter] === 0) return false;
    else hashTable[letter] -= 1;
  }

  return true;
}
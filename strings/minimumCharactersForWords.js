// O(n * l), where n = number of words and l = length of longest word
// O(c), where c = number of unique characters across all words

function minimumCharactersForWords(words) {

  const solution = [];
  const hashTable = {};

  for (const word of words) {
    const tempHashTable = {};

    for (const char of word) {
      if (tempHashTable[char] === undefined) {
        tempHashTable[char] = 1;
      } else {
        tempHashTable[char] += 1;
      }
    }

    for (const key in tempHashTable) {
      if (hashTable[key] === undefined) {
        hashTable[key] = tempHashTable[key];
      } else {
        if (tempHashTable[key] > hashTable[key]) {
          hashTable[key] = tempHashTable[key];
        }
      }
    }
  }

  for (const key in hashTable) {
    for (let count = hashTable[key]; count > 0; count -= 1) {
      solution.push(key);
    }
  }

  return solution;
}
// O(nm) time, where n = number of words, and m = length of longest word
// O(nm) space

function semordnilap(words) {

  const setOfWords = buildSet(words);
  const palindromes = [];

  for (let i = 0; i < words.length; i += 1) {
    const palindromeCharacters = [];

    for (let j = words[i].length - 1; j >= 0; j -= 1) {
      palindromeCharacters.push(words[i][j]);
    }
    const palindrome = palindromeCharacters.join('');
    if (palindrome in setOfWords && setOfWords[palindrome] !== i) {
      palindromes.push([words[i], palindrome]);
      delete setOfWords[words[i]];
      delete setOfWords[palindrome];
    }
  }
  return palindromes;
}

function buildSet(array) {
  const set = {};
  for (let i = 0; i < array.length; i += 1) {
    set[array[i]] = i;
  }
  return set;
}
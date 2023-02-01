// medium
// O(n * l * log(l)) time, where n = number of words in input array, and l = length of longest word
// O(nl) space

function groupAnagrams(words) {

  const anagrams = {};

  for (const word of words) {
    const sortedWord = word.split('').sort().join('');
    if (anagrams[sortedWord] === undefined) {
      anagrams[sortedWord] = [word];
    } else anagrams[sortedWord].push(word);
  }
  return Object.values(anagrams);
}
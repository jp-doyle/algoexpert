// O(n) time, where n = length of input string
// O(n) space

function caesarCipherEncryptor(string, key) {

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const shift = key > 26 ? key % 26 : key;
  let message = '';

  for (const letter of string) {
    const letterIndex = alphabet.indexOf(letter);
    let originalLetterIndex = letterIndex + shift;
    if (originalLetterIndex > 25) {
      originalLetterIndex -= 26;
    }
    message += alphabet[originalLetterIndex];
  }

  return message;
}
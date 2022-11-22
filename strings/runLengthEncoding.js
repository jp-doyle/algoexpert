// O(n) time, where n = length of input string
// O(n) space

function runLengthEncoding(string) {

  let i = 0;
  let encodedString = '';

  while (i < string.length) {
    const letter = string[i];
    let j = i + 1;
    let count = 1;

    while (string[j] === string[i]) {
      count += 1;
      j += 1;
    }
    if (count < 10) {
      encodedString += count.toString() + letter;
    } else {
      const quotient = Math.floor(count / 9);
      const remainder = count % 9;
      if (quotient > 0) {
        for (let c = 1; c <= quotient; c += 1) {
          encodedString += 9 + letter;
        }
      }
      if (remainder > 0) {
        encodedString += remainder.toString() + letter;
      }
    }
    i = j;
  }

  return encodedString;
}
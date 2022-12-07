// O(4^n * n) time
// O(4^n * n) space

function phoneNumberMnemonics(phoneNumber) {

  const hashTable = {
    0: ['0'],
    1: ['1'],
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z']
  };
  const mnemonics = [];
  let string = '';

  function recurse(i = 0) {
    if (i === phoneNumber.length) {
      mnemonics.push(string);
    } else {
      const num = phoneNumber[i];
      for (const char of hashTable[num]) {
        string += char;
        recurse(i + 1);
        string = string.slice(0, string.length - 1);
      }
    }
  }

  recurse();
  return mnemonics;
}
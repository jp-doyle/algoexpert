// O(n) time, where n = length of shorter string
// O(1) space

function oneEdit(stringOne, stringTwo) {

  const absDifference = Math.abs(stringOne.length - stringTwo.length)
  if (absDifference > 1) {
    return false;
  }
  let i = 0;
  let count = 0;
  if (absDifference === 1) {
    const shortString = stringOne.length < stringTwo.length ? stringOne : stringTwo;
    let longString;
    if (shortString === stringOne) longString = stringTwo;
    else longString = stringOne;
    let j = 0;

    while (j < shortString.length) {
      if (longString[i] === shortString[j]) {
        i += 1;
        j += 1;
      } else {
        i += 1;
        count += 1;
      }
      if (count === 2) {
        return false;
      }
    }
    return true;
  } else {

    while (i < stringOne.length) {
      if (stringOne[i] !== stringTwo[i]) {
        count += 1;
      }
      if (count === 2) {
        return false;
      }
      i += 1;
    }
    return true;
  }
}
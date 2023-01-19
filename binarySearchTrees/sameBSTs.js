// hard
// O(n^2) time, where n = length of arrays
// O(n^2) space
// can be done in O(n^2) time and O(h) space, where h = height of the BST

function sameBsts(arrayOne, arrayTwo) {

  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  if (arrayOne[0] !== arrayTwo[0]) {
    return false;
  }
  if (arrayOne.length === 1 || arrayOne.length === 0) {
    return true;
  }
  const aOneLeftSubtreeValues = getLeftSubtreeValues(arrayOne);
  const aTwoLeftSubtreeValues = getLeftSubtreeValues(arrayTwo);
  if (sameBsts(aOneLeftSubtreeValues, aTwoLeftSubtreeValues) === false) {
    return false;
  }
  const aOneRightSubtreeValues = getRightSubtreeValues(arrayOne);
  const aTwoRightSubtreeValues = getRightSubtreeValues(arrayTwo);
  if (sameBsts(aOneRightSubtreeValues, aTwoRightSubtreeValues) === false) {
    return false;
  }
  return true;
}

function getLeftSubtreeValues(array) {
  const root = array[0];
  const values = [];
  for (let i = 1; i < array.length; i += 1) {
    const value = array[i];
    if (value < root) {
      values.push(value);
    }
  }
  return values;
}

function getRightSubtreeValues(array) {
  const root = array[0];
  const values = [];
  for (let i = 1; i < array.length; i += 1) {
    const value = array[i];
    if (value >= root) {
      values.push(value);
    }
  }
  return values;
}
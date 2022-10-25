// O(n log n) time, where n = length of input array
// O(n) space

function minHeightBst(array) {

  const middleIndex = Math.floor(array.length / 2);
  const root = new BST(array[middleIndex]);

  function recursiveFunction(leftIndex, rightIndex) {

    if (leftIndex <= rightIndex) {

      const middleIndex = Math.floor((rightIndex - leftIndex) / 2) + leftIndex;
      root.insert(array[middleIndex]);
      recursiveFunction(leftIndex, middleIndex - 1);
      recursiveFunction(middleIndex + 1, rightIndex);
    }
  }
  recursiveFunction(0, middleIndex - 1);
  recursiveFunction(middleIndex + 1, array.length - 1);
  return root;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
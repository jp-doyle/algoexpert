class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time, where n = number of nodes in tree
// O(n) space

function findKthLargestValueInBst(tree, k, array = []) {

  if (tree.right) findKthLargestValueInBst(tree.right, k, array);
  if (array.length >= k) return array[k - 1];

  array.push(tree.value);
  if (array.length >= k) return array[k - 1];

  if (tree.left) findKthLargestValueInBst(tree.left, k, array);
  if (array.length >= k) return array[k - 1];

  return array[k-1];
}
// O(n) time, where n = number of nodes in tree
// O(n) space

function branchSums(root, sums = [], sum = 0) {

  if (!root.left && !root.right) {
    sums.push(sum + root.value);
  }
  if (root.left) {
    branchSums(root.left, sums, sum + root.value);
  }
  if (root.right) {
    branchSums(root.right, sums, sum + root.value);
  }
  return sums;
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
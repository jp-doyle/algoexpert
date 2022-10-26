// O(n) time, where n = number of nodes
// O(h) space, where h = height of tree

function nodeDepths(root) {

  let sum = 0;

  function recursiveFunction(tree, depth) {
    sum += depth;
    if (tree.left) {
      recursiveFunction(tree.left, depth + 1);
    }
    if (tree.right) {
      recursiveFunction(tree.right, depth + 1);
    }
  }

  recursiveFunction(root, 0);
  return sum;
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
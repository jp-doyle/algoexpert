// O(n) time, where n = number of nodes in tree
// O(n/h) space, where h = height of tree

function invertBinaryTree(tree) {
  if (tree.left !== null || tree.right !== null) {
    const tempBranch = tree.right;
    tree.right = tree.left;
    tree.left = tempBranch;
    if (tree.left !== null) invertBinaryTree(tree.left);
    if (tree.right !== null) invertBinaryTree(tree.right);
  }
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
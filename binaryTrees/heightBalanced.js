// O(n) time, where n = number of nodes
// O(n/h) space, where h = height of tree

function heightBalancedBinaryTree(tree) {

  function compareHeights(node) {
    if (node === null) return 0;
    else {
      const leftHeight = compareHeights(node.left) + 1;
      const rightHeight = compareHeights(node.right) + 1;

      if (Math.abs(leftHeight - rightHeight) > 1) {
        balanced = false;
      }
      const treeHeight = Math.max(leftHeight, rightHeight);
      return treeHeight;
    }
  }

  let balanced = true;
  compareHeights(tree);
  return balanced;
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
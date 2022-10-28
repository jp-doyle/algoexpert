// O(h) time, where h = height of tree
// O(1) space

function findSuccessor(tree, node) {

  if (node.right !== null) {
    let currentNode = node.right;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  } else {
    if (node.parent === null) {
      return null;
    } else if (node.parent.left === node) {
      return node.parent;
    } else if (node.parent.right === node) {
      if (node.parent.parent && node.parent.parent.left === node.parent) {
        return node.parent.parent;
      } else {
        return null;
      }
    }
  }
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
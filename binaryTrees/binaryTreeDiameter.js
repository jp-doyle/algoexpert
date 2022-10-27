// O(n) time, where n = number of nodes in tree
// O(n/h) space, where h = height of tree

function binaryTreeDiameter(tree, root = true) {

  if (tree === null) {
    return [0,0];
  } else {
    const leftTreeInfo = binaryTreeDiameter(tree.left, false);
    const rightTreeInfo = binaryTreeDiameter(tree.right, false);
    const height = Math.max(leftTreeInfo[0], rightTreeInfo[0]);
    const diameter = Math.max(leftTreeInfo[1], rightTreeInfo[1]);
    const newDiameter = Math.max(diameter, leftTreeInfo[0] + rightTreeInfo[0])

    if (root) return newDiameter;
    else return [height + 1, newDiameter];
  }
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    tree.left = null;
    tree.right = null;
  }
}
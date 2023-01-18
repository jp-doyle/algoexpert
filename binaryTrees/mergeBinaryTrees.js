// medium
// O(n) time, where n = number of nodes in smaller tree
// O(h) space, where h = height of the shorter tree

function mergeBinaryTrees(tree1, tree2) {

  if (tree1.left === null && tree2.left !== null) {
    tree1.left = tree2.left;
  } else if (tree1.left !== null && tree2.left !== null) {
    mergeBinaryTrees(tree1.left, tree2.left);
  }
  tree1.value += tree2.value;
  if (tree1.right === null && tree2.right !== null) {
    tree1.right = tree2.right;
  } else if (tree1.right !== null && tree2.right !== null) {
    mergeBinaryTrees(tree1.right, tree2.right);
  }
  return tree1;
}
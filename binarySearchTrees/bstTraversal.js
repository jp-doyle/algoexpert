// O(n) time, where n = number of nodes
// O(n/h) time, where h = height of tree

function inOrderTraverse(tree, array) {
  if (tree.left) inOrderTraverse(tree.left, array);
  array.push(tree.value);
  if (tree.right) inOrderTraverse(tree.right, array);
  return array;
}

// O(n) time, where n = number of nodes
// O(n/h) time, where h = height of tree

function preOrderTraverse(tree, array) {
  array.push(tree.value);
  if (tree.left) preOrderTraverse(tree.left, array);
  if (tree.right) preOrderTraverse(tree.right, array);
  return array;
}

// O(n) time, where n = number of nodes
// O(n/h) time, where h = height of tree

function postOrderTraverse(tree, array) {
  if (tree.left) postOrderTraverse(tree.left, array);
  if (tree.right) postOrderTraverse(tree.right, array);
  array.push(tree.value);
  return array;
}
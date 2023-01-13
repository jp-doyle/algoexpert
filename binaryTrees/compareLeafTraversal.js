// very hard
// O(n + m) time, where n = number of nodes in tree1, and m = number of nodes in tree2
// O(n + m + max(h1,h2)) space, where h = height

function compareLeafTraversal(tree1, tree2) {

  const tree1Values = getLeafValues(tree1);
  const tree2Values = getLeafValues(tree2);
  return JSON.stringify(tree1Values) === JSON.stringify(tree2Values);
}

function getLeafValues(node, values = []) {

  let leaf = true;
  if (node.left !== null) {
    leaf = false;
    getLeafValues(node.left, values);
  }
  if (node.right !== null) {
    leaf = false;
    getLeafValues(node.right, values);
  }
  if (leaf) values.push(node.value);
  return values;
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
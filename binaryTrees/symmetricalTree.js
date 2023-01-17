// medium
// O(n) time, where = number of nodes in tree
// O(h) space, where h = height of tree

function symmetricalTree(tree) {

  const leftNodes = [tree.left];
  const rightNodes = [tree.right];

  while (leftNodes.length > 0) {
    const leftNode = leftNodes.pop();
    const rightNode = rightNodes.pop();
    if (leftNode === null) {
      if (rightNode !== null) {
        return false;
      }
    } else {
        if (rightNode === null) {
          return false;
        } else {
          if (leftNode.value === rightNode.value) {
            leftNodes.push(leftNode.left, leftNode.right);
            rightNodes.push(rightNode.right, rightNode.left);
          } else {
            return false;
          }
        }
      }
  }
  return true;
}
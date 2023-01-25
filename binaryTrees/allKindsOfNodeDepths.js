// very hard
// O(n^2) time, where n = number of nodes in tree
// O(h) space, where h = height of tree

function allKindsOfNodeDepths(root) {

  let sum = 0;

  function recurse(node) {

    let leftDepths = [0];
    let rightDepths = [0];
    if (node.left !== null) {
      leftDepths = recurse(node.left);
    }
    if (node.right !== null) {
      rightDepths = recurse(node.right);
    }

    const deepSubtree = leftDepths.length > rightDepths.length ? leftDepths : rightDepths;
    const shallowSubtree = deepSubtree === leftDepths ? rightDepths : leftDepths;
    const depthDifference = deepSubtree.length - shallowSubtree.length;
    let depth = 1;

    for (let i = deepSubtree.length - 1; i >= 0; i -= 1) {
      const shallowSubtreeValue = shallowSubtree[i - depthDifference];
      if (shallowSubtreeValue !== undefined) {
        deepSubtree[i] += shallowSubtreeValue;
      }
      sum += deepSubtree[i] * depth;
      depth += 1;
    }
    deepSubtree.push(1);
    return deepSubtree;
  }

  recurse(root);
  return sum;
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// O(n) time, where n = number of nodes in tree
// O(1) space

function findClosestValueInBst(tree, target) {
  let closest = tree.value;
  let currentTree = tree;

  while (currentTree !== null) {
    if (currentTree.value === target) {
      return target;
    }
    const closestDiff = Math.abs(target - closest);
    const currentDiff = Math.abs(target - currentTree.value);

    if (currentDiff < closestDiff) {
      closest = currentTree.value;
    }

    if (target < currentTree.value) {
      currentTree = currentTree.left;
    } else {
      currentTree = currentTree.right;
    }
  }
  return closest;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
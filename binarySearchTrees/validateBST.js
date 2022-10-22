class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time, where n = number of nodes in tree
// O(h) space, where h = height of trees

function validateBst(tree) {
  let valid = true;

  function recursiveFunction(tree, min, max) {
    const leftBranch = tree.left;
    const rightBranch = tree.right;

    if (leftBranch) {
      if (leftBranch.value < tree.value) {
        if (min) {
          if (leftBranch.value >= min) {
            recursiveFunction(leftBranch, min, tree.value);
          } else {
            valid = false;
          }
        } else {
          recursiveFunction(leftBranch, min, tree.value);
        }
      } else {
        valid = false;
      }
    }

    if (rightBranch) {
      if (rightBranch.value >= tree.value) {
        if (max) {
          if (rightBranch.value < max) {
            recursiveFunction(rightBranch, tree.value, max);
          } else {
            valid = false;
          }
        } else {
          recursiveFunction(rightBranch, tree.value, max);
        }
      } else {
        valid = false;
      }
    }
  }

  recursiveFunction(tree, null, null);
  return valid;
}
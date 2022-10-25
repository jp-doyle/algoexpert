// O(n/h) time, where n = number of nodes in tree and h = height of tree
// O(1) space

function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {

  function isDescendant(node, possibleDescendant) {
    let descendant = false;
    let currentDescendant = node;
    while (currentDescendant !== null) {
      if (currentDescendant.value < possibleDescendant.value) {
        currentDescendant = currentDescendant.right;
      } else if (currentDescendant.value > possibleDescendant.value) {
        currentDescendant = currentDescendant.left;
      } else {
        descendant = true;
        break;
      }
    }
    return descendant;
  }

  if (isDescendant(nodeTwo, nodeOne)) {
    if (isDescendant(nodeThree, nodeTwo)) {
      return true;
    }
  }

  if (isDescendant(nodeTwo, nodeThree)) {
    if (isDescendant(nodeOne, nodeTwo)) {
      return true;
    }
  }

  return false;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
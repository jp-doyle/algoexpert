// O(h) time, where h = height of tree
// O(1) space

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {

  function getDepth(descendant) {
    let depth = 0;
    let currentNode = descendant;
    while (currentNode !== null) {
      currentNode = currentNode.ancestor;
      depth += 1;
    }
    return depth;
  }

  function returnAncestorOfEqualDepth(descendant, depthDifference) {
    let difference = 0;
    let ancestor = descendant;
    while (difference < depthDifference) {
      ancestor = ancestor.ancestor;
      difference += 1;
    }
    return ancestor;
  }

  const descendantOneDepth = getDepth(descendantOne);
  const descendantTwoDepth = getDepth(descendantTwo);

  let deeperDescendant, depthDifference;
  let node1, node2;

  if (descendantOneDepth > descendantTwoDepth) {
    deeperDescendant = descendantOne;
    depthDifference = descendantOneDepth - descendantTwoDepth;
    const ancestorOfEqualDepth = returnAncestorOfEqualDepth(descendantOne, depthDifference);
    node1 = ancestorOfEqualDepth;
    node2 = descendantTwo;
  } else if (descendantOneDepth < descendantTwoDepth) {
    deeperDescendant = descendantTwo;
    depthDifference = descendantTwoDepth - descendantOneDepth;
    const ancestorOfEqualDepth = returnAncestorOfEqualDepth(descendantTwo, depthDifference);
    node1 = ancestorOfEqualDepth;
    node2 = descendantOne;
  } else {
    node1 = descendantOne;
    node2 = descendantTwo;
  }

  while (node1 !== node2) {
    node1 = node1.ancestor;
    node2 = node2.ancestor;
  }
  return node1;
}

class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}
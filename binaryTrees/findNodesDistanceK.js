// O(n) time, where n = number of nodes in input tree
// O(n) space

function findNodesDistanceK(tree, target, k) {

  const values = [];
  let currentAncestors = [];
  let ancestors, targetNode;

  function findTargetAndAncestors(node) {

    if (node.value === target) {
      targetNode = node;
      ancestors = [...currentAncestors];
    } else {
      currentAncestors.push(node);
      if (node.left) findTargetAndAncestors(node.left);
      if (node.right) findTargetAndAncestors(node.right);
      currentAncestors.pop();
    }
  }

  function findAncestorAndCousinsAtKDistance(ancestors, distance) {

    const KthAncestor = ancestors[ancestors.length - k];
    if (KthAncestor !== undefined) {
      values.push(KthAncestor.value);
    }
    let i = ancestors.length - k + 1;
    if (i < 0) i = 0;

    while (i >= 0 && i < ancestors.length) {
      findDescendantsAtKDistance(ancestors[i], ancestors.length - i);
      i += 1;
    }
  }

  function findDescendantsAtKDistance(node, distance) {

    if (distance === k && node !== targetNode) values.push(node.value);
    else {
      if (node.left && ancestors.indexOf(node.left) === -1 && node.left !== targetNode) {
        findDescendantsAtKDistance(node.left, distance + 1);
      }
      if (node.right && ancestors.indexOf(node.right) === - 1 && node.right !== targetNode) {
        findDescendantsAtKDistance(node.right, distance + 1);
      }
    }
  }

  findTargetAndAncestors(tree);
  findAncestorAndCousinsAtKDistance(ancestors, 0);
  findDescendantsAtKDistance(targetNode, 0);
  return values;
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
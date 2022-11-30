// O(n) time, where n = number of nodes in input tree
// O(h) space

function maxPathSum(tree) {

  let max = tree.value;

  function recurse(node) {

    if (node === null) return 0;
    const leftSum = recurse(node.left);
    const rightSum = recurse(node.right);
    const leftPlusValue = leftSum + node.value;
    const rightPlusValue = rightSum + node.value;
    const leftAndRightPlusValue = leftPlusValue + rightSum;
    const maxBranch = Math.max(leftSum, rightSum);
    max = Math.max(max, node.value, leftPlusValue, rightPlusValue, leftAndRightPlusValue);
    return Math.max(node.value, node.value + maxBranch);
  }

  recurse(tree);
  return max;
}
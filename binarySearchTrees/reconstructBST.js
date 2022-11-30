// O(n^2) time, where n = length of input array
// O(n) space

function reconstructBst(array, root = new BST(array[0]), idx = 1) {

  if (array.length === 1 && idx === 1) return new BST(array[0]);
  else if (array.length > 0) {
    let index;

    for (let i = idx; i < array.length; i += 1) {
      if (array[i] >= root.value) {
        index = i;
        break;
      }
    }

    if (index === undefined) {
      root.left = new BST(array[idx]);
      reconstructBst(array.slice(idx + 1), root.left, 0);
    } else if (index === idx) {
      root.right = new BST(array[idx]);
      reconstructBst(array.slice(idx + 1), root.right, 0);

    } else {
      root.left = new BST (array[idx]);
      reconstructBst(array.slice(idx + 1,index), root.left, 0);
      root.right = new BST (array[index]);
      reconstructBst(array.slice(index + 1), root.right, 0);
    }
    return root;
  }
}
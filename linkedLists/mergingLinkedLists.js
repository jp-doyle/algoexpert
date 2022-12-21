// 12.20.22
// O(n + m) time
// O(1) space

function mergingLinkedLists(linkedListOne, linkedListTwo) {

  const length1 = getLength(linkedListOne);
  const length2 = getLength(linkedListTwo);
  const longList = length1 > length2 ? linkedListOne : linkedListTwo;
  const shortList = longList === linkedListOne ? linkedListTwo : linkedListOne;
  let longListNode = longList;
  let shortListNode = shortList;
  let difference = Math.abs(length1 - length2);

  while (difference > 0) {
    longListNode = longListNode.next;
    difference -= 1;
  }

  while (shortListNode !== null) {
    if (shortListNode === longListNode) {
      return shortListNode;
    }
    shortListNode = shortListNode.next;
    longListNode = longListNode.next;
  }
  return null;
}

function getLength(linkedList) {
  let length = 0;
  let node = linkedList;

  while (node !== null) {
    length += 1;
    node = node.next;
  }
  return length;
}
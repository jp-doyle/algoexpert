// 12.22.22
// O(n + m) time, where n = length of list 1 and m = length of list 2
// O(1) space

function mergeLinkedLists(headOne, headTwo) {

  let nextL1Node = headOne;
  let nextL2Node = headTwo;
  let currentNode = new LinkedList(null);

  while (nextL1Node !== null || nextL2Node !== null) {
    if (nextL2Node === null || (nextL1Node && nextL1Node.value < nextL2Node.value)) {
      currentNode.next = nextL1Node;
      currentNode = nextL1Node;
      nextL1Node = nextL1Node.next;
      continue;
    }
    if (nextL1Node === null || (nextL2Node && nextL1Node.value >= nextL2Node.value)) {
      currentNode.next = nextL2Node;
      currentNode = nextL2Node;
      nextL2Node = nextL2Node.next;
    }
  }
  return headOne.value < headTwo.value ? headOne : headTwo;
}
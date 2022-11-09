// O(n) time, where n = number of nodes in linked list
// O(1) space

function reverseLinkedList(head) {

  let currentNode = head;
  let nextNode = currentNode.next;
  currentNode.next = null;

  while (nextNode !== null) {
    const nextNextNode = nextNode.next;
    nextNode.next = currentNode;
    currentNode = nextNode;
    nextNode = nextNextNode;
  }

  return currentNode;
}

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
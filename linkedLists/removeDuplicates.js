// O(n) time, where n = number of nodes in linked list
// O(1) space

function removeDuplicatesFromLinkedList(linkedList) {

  let currentNode = linkedList;

  while (currentNode !== null) {
    let pointer = currentNode.next;
    while (pointer && currentNode.value === pointer.value) {
      const newNextNode = pointer.next;
      pointer.next = null;
      currentNode.next = newNextNode;
      pointer = newNextNode;
    }
    currentNode = pointer;
  }

  return linkedList;
}

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
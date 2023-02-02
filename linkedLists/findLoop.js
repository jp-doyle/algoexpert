// hard
// O(n) time, where n = number of nodes in linked list
// O(1) space

function findLoop(head) {

  let slowPointer = head.next;
  let fastPointer = head.next.next;

  while (slowPointer !== fastPointer) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  slowPointer = head;

  while (slowPointer !== fastPointer) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }

  return slowPointer;
}

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
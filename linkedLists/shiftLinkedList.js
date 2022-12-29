// O(n) time, where n = length of linked list
// O(1) space

function shiftLinkedList(head, k) {

  let length = 0;
  let node = head;
  let tail;

  while (node !== null) {
    if (node.next === null) {
      tail = node;
    }
    node = node.next;
    length += 1;
  }

  let shift = k % length;
  if (shift === 0) return head;
  node = head;
  let newHead, newTail;
  if (shift < 0) {

    while (shift < -1) {
      node = node.next;
      shift += 1;
    }
  } else {

    while (shift < length - 1) {
      node = node.next;
      shift += 1;
    }
  }
  newTail = node;
  newHead = newTail.next;
  newTail.next = null;
  tail.next = head;
  return newHead;
}

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
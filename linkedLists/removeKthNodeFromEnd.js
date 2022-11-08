// O(n) time, where n = number of nodes in linked list
// O(1) space

function removeKthNodeFromEnd(head, k) {

  let counter = 1;
  let currentNode = head;

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    counter += 1;
  }

  if (counter - k === 0) {
    head.value = head.next.value;
    head.next = head.next.next;
  } else {
    let secondCounter = counter - k - 1;
    currentNode = head;

    while (secondCounter > 0) {
      currentNode = currentNode.next;
      secondCounter -= 1;
    }

    let kthNode = currentNode.next;
    if (kthNode.next === null) {
      currentNode.next = null;
    } else {
      currentNode.next = kthNode.next;
      kthNode.next = null;
    }
  }
}

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// medium

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1) time | O(1) space
  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.insertBefore(this.head, node);
    }
  }

  // O(1) time | O(1) space
  setTail(node) {
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.insertAfter(this.tail, node);
    }
  }

  // O(1) time | O(1) space
  insertBefore(node, nodeToInsert) {
    if (nodeToInsert !== this.head || nodeToInsert !== this.tail) {
      this.remove(nodeToInsert);
      nodeToInsert.prev = node.prev;
      nodeToInsert.next = node;
      if (node.prev === null) {
        this.head = nodeToInsert;
      } else {
        node.prev.next = nodeToInsert;
      }
      node.prev = nodeToInsert;
    }
  }

  // O(1) time | O(1) space
  insertAfter(node, nodeToInsert) {
    if (nodeToInsert !== this.head || nodeToInsert !== this.tail) {
      this.remove(nodeToInsert);
      nodeToInsert.prev = node;
      nodeToInsert.next = node.next;
      if (node.next === null) {
        this.tail = nodeToInsert;
      } else {
        node.next.prev = nodeToInsert;
      }
      node.next = nodeToInsert;
    }
  }

  // O(p) time | O(1) space
  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
    } else {
      let node = this.head;
      let count = 1;
      while (count < position && node !== null) {
        node = node.next;
        count += 1;
      }
      if (node !== null) {
        this.insertBefore(node, nodeToInsert);
      } else {
        this.setTail(nodeToInsert);
      }
    }
  }

  // O(n) time | O(1) space
  removeNodesWithValue(value) {
    let node = this.head;
    while (node !== null) {
      const nextNode = node.next;
      if (node.value === value) {
        this.remove(node);
        node = nextNode;
      } else {
        node = node.next;
      }
    }
  }

  // O(1) time | O(1) space
  remove(node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }

  // O(n) time | O(1) space
  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
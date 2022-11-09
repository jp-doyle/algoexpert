class LRUCache {

  constructor(maxSize) {
    this.maxSize = maxSize || 1;
    this.size = 0;
    this.hashTable = {};
    this.head = null;
    this.tail = null;
  }

  // O(1) time
  // O(1) space
  insertKeyValuePair(key, value) {
    const node = this.hashTable[key];
    if (node) {
      node.value = value;
    } else {
      const newNode = new Node(key, value);
      if (this.size === 0) {
        this.hashTable[key] = newNode;
        this.head = newNode;
        this.tail = newNode;
        this.size += 1;
      } else if (this.size === this.maxSize) {
        this.hashTable[key] = newNode;
        if (this.maxSize === 1) {
          delete this.hashTable[this.tail.key];
          this.head = newNode;
          this.tail = newNode;
        } else {
          const newTail = this.tail.next;
          newNode.previous = this.head;
          this.head.next = newNode;
          this.tail.next = null;
          newTail.previous = null;
          delete this.hashTable[this.tail.key];
          this.head = newNode;
          this.tail = newTail;
        }
      } else {
        this.hashTable[key] = newNode;
        this.head.next = newNode;
        newNode.previous = this.head;
        this.head = newNode;
        this.size += 1;
      }
    }
  }

  // O(1) time
  // O(1) space
  getValueFromKey(key) {
    const node = this.hashTable[key];
    if (node === undefined) return null;
    else {
      if (this.size > 1 && key === this.tail.key) {
        const newTail = node.next;
        this.head.next = node;
        node.previous = this.head;
        node.next = null;
        newTail.previous = null;
        this.head = node;
        this.tail = newTail;
      } else if (this.size > 1 && key !== this.tail.key && key !== this.head.key) {
        const nextNode = node.next;
        const prevNode = node.previous;
        node.previous = this.head;
        const nextNodeHead = node.next === this.head ? true : false;
        node.next = null;
        nextNode.previous = prevNode;
        if (nextNodeHead) {
          nextNode.next = node;
        }
        prevNode.next = nextNode;
        this.head = node;
      }
      return node.value;
    }
  }

  // O(1) time
  // O(1) space
  getMostRecentKey() {
    return this.head.key;
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}
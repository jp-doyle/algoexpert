// O(max(m,n)) time, where m = length of linkedListOne and n = length of linkedListTwo
// O(1) space

function sumOfLinkedLists(linkedListOne, linkedListTwo) {

  const numbers = [];
  const linkedLists = [...arguments];

  for (const linkedList of linkedLists) {
    let number = '';
    let currentNode = linkedList;

    while (currentNode !== null) {
      number = currentNode.value.toString() + number;
      currentNode = currentNode.next;
    }
    numbers.push(Number(number));
  }

  const stringifiedSum = (numbers[0] + numbers[1]).toString();

  let i = stringifiedSum.length - 1;
  const newLinkedList = new LinkedList(Number(stringifiedSum[i]));
  let currentNode = newLinkedList;
  i -= 1;

  while (i >= 0) {
    currentNode.next = new LinkedList(Number(stringifiedSum[i]));
    currentNode = currentNode.next;
    i -= 1;
  }

  return newLinkedList;
}

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
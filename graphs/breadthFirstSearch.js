class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // O(n) time, where n = length of input array
  // O(n) space

  breadthFirstSearch(array) {

    array.push(this.name);

    function recursiveFunction(children) {

      if (children.length > 0) {
        const grandChildren = [];
        for (const child of children) {
          array.push(child.name);
          grandChildren.push(...child.children);
        }
        recursiveFunction(grandChildren);
      }
    }

    recursiveFunction(this.children);
    return array;
  }
}
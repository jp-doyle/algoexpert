class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // O(n) time, where n = number of nodes
  // O(n) space

  depthFirstSearch(array, node = this) {

    if (node !== null) array.push(node.name);
    if (node.children.length > 0) {
      for (const child of node.children) {
        this.depthFirstSearch(array, child);
      }
    }
    return array;
  }
}
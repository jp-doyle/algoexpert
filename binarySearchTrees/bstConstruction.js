class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // O(h/n) time, where h = height and n = number of nodes in BST
  // O(h/n) space

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }

  // O(h/n) time, where h = height and n = number of nodes in BST
  // O(h/n) space

  contains(value) {
    if (value < this.value && this.left !== null) {
      return this.left.contains(value);
    } else if (value > this.value && this.right !== null) {
      return this.right.contains(value);
    } else if (value === this.value) {
      return true;
    } else {
      return false;
    }
  }

  // O(h/n) time, where h = height and n = number of nodes in BST
  // O(h/n) space

  remove(value, parent = null) {
      if (value < this.value && this.left !== null) {
        this.left.remove(value, this);
      } else if (value > this.value && this.right !== null) {
        this.right.remove(value, this);
      } else {
        if (this.left !== null && this.right !== null) {
          this.value = this.right.getMinNode().value;
          this.right.remove(this.value, this);
        } else if (parent === null) {
          if (this.left !== null) {
            this.value = this.left.value;
            this.right = this.left.right;
            this.left = this.left.left;
          } else if (this.right !== null) {
            this.value = this.right.value;
            this.right = this.right.right;
            this.left = this.right.left;
          }
        } else if (parent.left === this) {
          parent.left = this.left !== null ? this.left : this.right;
        } else if (parent.right === this) {
          parent.right = this.left !== null ? this.left : this.right;
        }
    }
    return this;
  }

  getMinNode() {
    if (this.left === null) {
      return this;
    } else {
      return this.left.getMinNode();
    }
  }
}
class MinMaxStack {
  constructor(props) {
    this.mins = [];
    this.maxs = [];
    this.stack = [];
  }

  // O(1) time | O(1) space
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // O(1) time | O(1) space
  pop() {
    this.mins.pop();
    this.maxs.pop();
    return this.stack.pop();
  }

  // O(1) time | O(1) space
  push(number) {
    if (this.stack.length === 0) {
      this.mins.push(number);
      this.maxs.push(number);
    } else {
      const lastMin = this.mins[this.mins.length - 1];
      const lastMax = this.maxs[this.maxs.length - 1];
      if (number > lastMax) {
        this.maxs.push(number);
      } else {
        this.maxs.push(lastMax);
      }
      if (number < lastMin) {
        this.mins.push(number);
      } else {
        this.mins.push(lastMin);
      }
    }
    this.stack.push(number);
  }

  // O(1) time | O(1) space
  getMin() {
    if (this.mins.length === 0) return null;
    else return this.mins[this.mins.length - 1];
  }

  // O(1) time | O(1) space
  getMax() {
    if (this.maxs.length === 0) return null;
    else return this.maxs[this.maxs.length - 1];
  }
}
class Stack {
  constructor() {
    this.data = [];
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  push(value) {
    this.data.push(value);
    return this.data;
  }
  pop() {
    this.data.pop();
    return this;
  }
  isEmpty() {
    if (this.data.length === 0) {
      return true;
    }
    return false;
  }
}

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  peek() {
    if (this.stack1.length) {
      return this.stack1[0];
    } else {
      return this.stack2[this.stack2.length - 1];
    }
  }
  enqueue(value) {
    let length = this.stack2.length;
    if (!this.stack1.length) {
      for (let i = 0; i < length; i++) {
        this.stack1.push(this.stack2.pop());
      }
    }
    this.stack1.push(value);
    return this;
  }
  dequeue() {
    let length = this.stack1.length;
    for (let i = 0; i < length; i++) {
      this.stack2.push(this.stack1.pop());
    }

    this.stack2.pop();
    return this;
  }
  isEmpty() {
    if (this.stack1.length === 0 && this.stack2.length === 0) {
      return true;
    }
    return false;
  }
}

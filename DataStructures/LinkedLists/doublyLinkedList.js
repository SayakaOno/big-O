class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class doublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = traverseToIndex(index - 1);
    const follower = leader.next;
    newNode.previous = leader;
    newNode.next = follower;
    follower.previous = newNode;
    leader.next = newNode;
    this.length++;
    return this;
  }
  remove(index) {
    if (index >= this.length) {
      return undefined;
    }
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    unwantedNode.next.previous = leader;
    this.length--;
    return this;
  }
  traverseToIndex(index) {
    let currentNode = null;
    if (index <= this.length / 2) {
      let counter = 0;
      currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      let counter = this.length;
      currentNode = this.tail;
      while (counter !== index) {
        currentNode = currentNode.previous;
        counter--;
      }
    }
    return currentNode;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}
//1,10,5,16

const myLinkedList = new doublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(4, 7);
console.log(myLinkedList.printList());
myLinkedList.remove(4);
console.log(myLinkedList.printList());

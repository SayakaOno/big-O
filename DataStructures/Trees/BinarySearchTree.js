class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
          } else {
            currentNode.left = newNode;
            return this;
          }
        } else {
          if (currentNode.right) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
            return this;
          }
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  breadthFirstSearch() {
    let currentNodes = [this.root];
    let list = [];

    while (currentNodes.length) {
      list.push(currentNodes[0].value);
      if (currentNodes[0].left) {
        currentNodes.push(currentNodes[0].left);
      }
      if (currentNodes[0].right) {
        currentNodes.push(currentNodes[0].right);
      }
      currentNodes.shift();
    }
    console.log(list);
    return list;
  }

  breadthFirstSearchR(currentNodes, list) {
    if (!currentNodes.length) {
      console.log(list);
      return list;
    }
    list.push(currentNodes[0].value);
    if (currentNodes[0].left) {
      currentNodes.push(currentNodes[0].left);
    }
    if (currentNodes[0].right) {
      currentNodes.push(currentNodes[0].right);
    }
    currentNodes.shift();
    return this.breadthFirstSearchR(currentNodes, list);
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.rigth = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

tree.breadthFirstSearchR([tree.root], []);

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let queue = [this.root];

    while (queue.length) {
      let current = queue.shift();

      if (current.left === null) {
        current.left = newNode;
        return;
      } else {
        queue.push(current.left);
      }

      if (current.right === null) {
        current.right = newNode;
        return;
      } else {
        queue.push(current.right);
      }
    }
  }

  printBFS() {
    if (!this.root) return;

    let queue = [this.root];

    while (queue.length) {
      let current = queue.shift();
      console.log(current.value);

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  printDFS(node = this.root) {
    if (node !== null) {
      console.log(node.value);
      this.printDFS(node.left);
      this.printDFS(node.right);
    }
  }
}

// Creating a Binary Tree
const myBinaryTree = new BinaryTree();

// Inserting elements
myBinaryTree.insert(10);
myBinaryTree.insert(5);
myBinaryTree.insert(15);
myBinaryTree.insert(3);
myBinaryTree.insert(7);

// Printing the tree using Breadth-First Search (BFS)
console.log("BFS:");
myBinaryTree.printBFS();

// Printing the tree using Depth-First Search (DFS)
console.log("\nDFS:");
myBinaryTree.printDFS();

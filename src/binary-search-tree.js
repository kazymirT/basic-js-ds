const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootTree=null;
}

  root() {
    return !this.rootTree ? null : this.rootTree;
      
  }

  add(data) {
    if (!data) return;
    const newNode = { data, left: null, right: null };
  
    if (!this.rootTree) {
      this.rootTree = newNode;
      return;
    }
  
    let currentNode = this.rootTree;
  
    while (currentNode) {
      if (data === currentNode.data) return currentNode;
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }
  

has( data ) {
  return this.find(data) ? true : false;
}

find(data) {
  let node = this.rootTree;
  while (node) {
      if (node.data === data) return node;
      node = data < node.data ? node.left : node.right;
  }
  return null;
}

remove(data) {
  let currentNode = this.rootTree;
  let parentNode = null;

  while (currentNode !== null) {
    if (data === currentNode.data) {
      if (currentNode.left === null && currentNode.right === null) {
        if (parentNode === null) {
          this.rootTree = null;
        } else if (currentNode === parentNode.left) {
          parentNode.left = null;
        } else {
          parentNode.right = null;
        }
      } else if (currentNode.left === null) {
        if (parentNode === null) {
          this.rootTree = currentNode.right;
        } else if (currentNode === parentNode.left) {
          parentNode.left = currentNode.right;
        } else {
          parentNode.right = currentNode.right;
        }
      } else if (currentNode.right === null) {
        if (parentNode === null) {
          this.rootTree = currentNode.left;
        } else if (currentNode === parentNode.left) {
          parentNode.left = currentNode.left;
        } else {
          parentNode.right = currentNode.left;
        }
      } else {
        let replacementNode = currentNode.right;
        let replacementParentNode = currentNode;

        while (replacementNode.left !== null) {
          replacementParentNode = replacementNode;
          replacementNode = replacementNode.left;
        }

        currentNode.data = replacementNode.data;

        if (replacementParentNode.left === replacementNode) {
          replacementParentNode.left = replacementNode.right;
        } else {
          replacementParentNode.right = replacementNode.right;
        }
      }

      return;
    } else if (data < currentNode.data) {
      parentNode = currentNode;
      currentNode = currentNode.left;
    } else {
      parentNode = currentNode;
      currentNode = currentNode.right;
    }
  }
}

min() {
  return this.minOrMax("left")
  }

  max() {    
  return this.minOrMax("right");
  }
  minOrMax(side) {
      const node = this.rootTree;
  
      function traverse(node, side) {
        if (!node) return null;
  
        if (node[side])return traverse(node[side], side);
        else return node.data;
      }
  
      return traverse(node, side);
    }
}

module.exports = {
  BinarySearchTree
};
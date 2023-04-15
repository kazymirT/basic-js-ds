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
    this.rootTree = addWithin(this.rootTree, data);

    function addWithin(node, data) {
      if (!node) return { data, left: null, right: null };
      if (node.data === data) return node;
      data < node.data ? (node.left = addWithin(node.left, data)) : (node.right = addWithin(node.right, data));
      return node;
    }
  }

has( /*data*/ ) {
  throw new NotImplementedError('Not implemented');
}

find(data) {
  return searchWithin(this.rootTree, data);

  function searchWithin(node, data) {
    if (!node) return null;
    
    if (node.data === data) return node;
    
    return data < node.data ? searchWithin(node.left, data) : searchWithin(node.right, data);
  }
}

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
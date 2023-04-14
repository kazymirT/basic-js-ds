const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList( l, k ) {
  let numberRemove=k;
  let current;
  let next;
  let indexL=[];
     function indexOf(k){
      let current = l;
      let index = 0;
      console.log(current);
      while(current){
          if(current.value === k){
              console.log(index);
              indexL.push(index);
          }
          current = current.next;
          index++;
      }
      console.log('-1')
  }
  indexOf(k)
  console.log(indexL)
     function removeAt(position){  
      let current = l;
      if(position === 0){
          l = current.next;
      }else{
          let prev = null;
          let index = 0;
          while(index < position){
              prev = current;
              current = current.next;
              index++;
          }
          prev.next = current.next;
      }
      this.length--;
      return current.value;
  }
  indexL.reverse().forEach(e=>removeAt(e))
  // console.log(removeAt(0))
  return l;
}

module.exports = {
  removeKFromList
};

const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.list = [];
    this.listElement;
  }

  getUnderlyingList() {
    return this.list[0];
  }

  enqueue(value) {
    if(this.list.length===0){
    this.listElement={value:value, next: null};
    this.list.push(this.listElement);
    }else{
    let current=this.list[0];
    while(current.next){
        current=current.next;
    }
    current.next={value:value, next:null};
    }
  }

  dequeue() {
    let firstElement=this.list[0].value;
    if(this.list[0].next===null){
    this.list[0].value=null;
    this.list[0].next=null;
    }else{
    this.list[0].value=this.list[0].next.value;
    this.list[0].next=this.list[0].next.next;
    }
  return firstElement;
}
 }

module.exports = {
  Queue
};

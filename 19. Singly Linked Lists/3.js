class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return;

    const current = this.head;
    this.head = current.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return current;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.tail = newNode;
    }
    
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(2);
list.push(3);
list.push(4);
list.pop();
list.shift();
list.unshift(5)

console.log(list);

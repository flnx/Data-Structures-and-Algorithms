class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;

    return this;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
    }

    this.head = newNode;

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return;

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  print() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }

  remove(index) {
    if (this.length === 0 || index < 0 || index > this.length - 1) return;

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    let current = this.get(index);

    current.prev.next = current.next;
    current.next.prev = current.prev;

    this.length--;
    return current;
  }

  get(index) {
    if (this.length === 0 || index < 0 || index >= this.length) return null;

    let current;

    if (index < this.length / 2) {
      current = this.head;

      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;

      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    }

    return current;
  }

  set(index, val) {
    const node = this.get(index);

    if (!node) return false;

    node.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      return this.unshift(val);
    }

    if (index === this.length) {
      return this.push(val);
    }

    let current = this.get(index);
    const newNode = new Node(val);

    newNode.prev = current.prev;
    newNode.next = current;
    current.prev.next = newNode;
    current.prev = newNode;

    this.length++;
    return this;
  }

  reverse() {
    if (this.length < 2) return this;

    let prev = null;
    let current = this.head;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = current.next;

      current.next = prev;
      current.prev = next;

      prev = current;

      current = next;
    }

    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    return this;
  }
}

const doublyLinkedList = new LinkedList();

console.log(doublyLinkedList.unshift(5)); //) doublyLinkedList
console.log(doublyLinkedList.length); //) 1
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.unshift(10)); // doublyLinkedList
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.head.val); // 10
console.log(doublyLinkedList.head.next.val); // 5
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.unshift(15)); // doublyLinkedList
console.log(doublyLinkedList.length); //3
console.log(doublyLinkedList.head.val); // 15
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.head.next.next.val); // 5

console.log(doublyLinkedList.shift().val); // 15
console.log(doublyLinkedList.length); //) 2
console.log(doublyLinkedList.shift().val); // 10
console.log(doublyLinkedList.length); //) 1
console.log(doublyLinkedList.shift().val); // 5
console.log(doublyLinkedList.length); //) 0
console.log(doublyLinkedList.pop()); // undefined
console.log(doublyLinkedList.length); // 0

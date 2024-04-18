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
  }

  pop() {
    if (this.length === 0) return this;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length--;
    return this;
  }

  shift() {
    if (this.length === 0) return this;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length--;
    return this;
  }

  remove(index) {
    if (this.length === 0 || index < 0 || index > this.length - 1) return this;

    if (index === 0) {
      this.shift();
      return this;
    }

    if (index === this.length - 1) {
      this.pop();
      return this;
    }

    let current = this.head;

    for (let i = 1; i <= index; i++) {
      current = current.next;
    }

    current.prev.next = current.next;
    current.next.prev = current.prev;

    this.length--;
  }
}

const list = new LinkedList();

list.push(1);
list.push(2);
list.push(3);

list.remove(1);

console.log(list);

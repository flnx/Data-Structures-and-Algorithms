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
    if (index < 0 || index > this.length) return this;

    if (index === 0) {
      this.unshift(val);
      return this;
    }

    if (index === this.length) {
      this.push(val);
      return this;
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

const list = new LinkedList();

list.insert(0, 'val 1');
list.insert(1, 'val 2');
list.insert(2, 'val 3');

list.print()

// list.reverse();

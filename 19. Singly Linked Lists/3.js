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
    if (!this.head) return false;

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

  checkAllNodes() {
    let current = this.head;

    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }

  get(index) {
    if (typeof index !== 'number' || index > this.length - 1 || index < 0) {
      return false;
    }

    let currentPosition = 0;
    let current = this.head;

    while (currentPosition < index) {
      currentPosition++;
      current = current.next;
    }

    return current;
  }

  set(val, index) {
    let node = this.get(index);

    if (!node) {
      return false;
    }

    node.val = val;
    return true;
  }

  insert(index, val) {
    if (typeof index != 'number' || index > this.length || index < 0) {
      return false;
    }

    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);

    newNode.next = prevNode.next;
    prevNode.next = newNode;

    this.length++;

    return true;
  }

  remove(index) {
    if (typeof index !== 'number' || index > this.length - 1 || index < 0) {
      return false;
    }

    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();

    const prevNode = this.get(index - 1);
    const nodeToRemove = prevNode.next;

    prevNode.next = nodeToRemove.next;
    this.length--;

    return nodeToRemove;
  }

  reverse() {
    if (this.length <= 1) {
      return false;
    }

    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    // Swap head and tail
    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    return true;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
// const res = list.insert(3, 'new');
// list.push(4);
// list.push(5);
// list.pop();
// list.shift();
// list.unshift(5);

// const result = list.set('LoL', 0);
list.reverse();
list.checkAllNodes();

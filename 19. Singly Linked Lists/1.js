class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    } 

    isEmpty() {
        return this.size === 0;
    }

    prepend(value) {
        const current = new Node(value);

        if (!this.isEmpty()) {
            current.next = this.head;
        }

        this.head = current;
        this.size++;
    }
}

const list1 = new LinkedList();
list1.prepend(10);
list1.prepend(20);
list1.prepend(30);

console.log(list1);

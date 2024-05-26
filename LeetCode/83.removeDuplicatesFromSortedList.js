// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function deleteDuplicates(head) {
  let current = head;

  while (current && current.next) {
    const nextNode = current.next;

    if (current.val === nextNode.val) {
      current.next = nextNode.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

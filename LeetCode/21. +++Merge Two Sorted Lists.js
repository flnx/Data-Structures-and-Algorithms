// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Constraints:

//     The number of nodes in both lists is in the range [0, 50].
//     -100 <= Node.val <= 100
//     Both list1 and list2 are sorted in non-decreasing order.

// const r1 = mergeTwoLists([1, 2, 4], [1, 3, 4]); // [1,1,2,3,4,4]
// const r2 = mergeTwoLists([], []); // []
// const r3 = mergeTwoLists([], [0]); // [0]

// console.log(r1);
// console.log(r2);
// console.log(r3);

// Definition for singly-linked list node
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// Initialize linked lists
const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));


const r = mergeTwoLists(list1, list2);

// Main function to merge two sorted linked lists
function mergeTwoLists(list1, list2) {
   //
}

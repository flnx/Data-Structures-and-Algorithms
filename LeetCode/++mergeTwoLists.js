function mergeTwoLists(list1, list2) {
    const result = [];

    let i = 0;
    let j = 0;

    while (i < list1.length && j < list2.length) {
        if (list1[i] < list2[j]) {
            result.push(list1[i]);
            i++;
        } else {
            result.push(list2[j]);
            j++;
        }
    }

    while (i < list1.length) {
        result.push(list1[i]);
        i++;
    }

    while (j < list2.length) {
        result.push(list2[j]);
        j++;
    }

    return result;
}

const r1 = mergeTwoLists([1, 3, 5], [2, 4, 9]); // [1, 2, 3, 4, 5, 9]
const r2 = mergeTwoLists([], []); // []
const r3 = mergeTwoLists([], [0]); // [0]

console.log(r1);
console.log(r2);
console.log(r3);

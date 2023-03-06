Space Complexity in JS
Rules of Thumb

* Most primitives (booleans, numbers, undefined, null) are constant space
* Strings require O(n) space (where n is the string length)
Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

// O(1) space

function sum(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

O(n + 2) Space / O(n)
// Because the space is directly proportionate to the input array (n).

function sum(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }

    return newArr;
}
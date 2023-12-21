// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

function someRecursive(arr, cb) {
    if (arr.length <= 1) {
        return cb(arr[0]);
    }

    const currentNum = arr[0];

    if (cb(currentNum)) {
        return true;
    }

    return someRecursive(arr.slice(1), cb);
}

// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

const r1 = someRecursive([1, 2, 3, 4], isOdd); // true
const r2 = someRecursive([4, 6, 8, 9], isOdd); // true
const r3 = someRecursive([4, 6, 8], isOdd); // false
const r4 = someRecursive([4, 6, 8], (val) => val > 10); // false

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);

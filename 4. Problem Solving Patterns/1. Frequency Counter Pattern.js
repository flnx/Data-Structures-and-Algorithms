//  Frequency Counters
//  This pattern uses objects or sets to collect values/frequencies of values
//  This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

// Example
// Write a function called *same*, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the 2nd array.
// The frequency of values must be the same.

function same(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return false;
    }

    if (arr1.length !== arr2.length) {
        return false;
    }

    const map1 = {};
    const map2 = {};

    const LEN = arr1.length;

    for (let i = 0; i < LEN; i++) {
        const num = arr1[i];
        const numSquared = num * num;

        const freqNum = arr2[i];

        if (isNaN(numSquared) || isNaN(freqNum)) return false;

        map1[numSquared] = (map1[numSquared] || 0) + 1;
        map2[freqNum] = (map2[freqNum] || 0) + 1;
    }

    for (let key in map1) {
        if (map2[key] !== map1[key]) {
            return false;
        }
    }

    return true;
}

// true
const arr1 = [1, 2, 3];
const arr2 = [4, 1, 9];

// false
const arr3 = [1, 2, 3];
const arr4 = [1, 9];

// false
const arr5 = [1, 2, 1];
const arr6 = [4, 4, 1];

console.log(same(arr5, arr6));

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

const r1 = sameFrequency(182, 281); // true
const r2 = sameFrequency(34, 14); // false
const r3 = sameFrequency(3589578, 5879385); // true
const r4 = sameFrequency(22, 222); // false

console.log(r1, r2, r3, r4);

function sameFrequency(val1, val2) {
    if (!isPositiveInteger(val1) || !isPositiveInteger(val2)) {
        return false;
    }

    const numStr1 = String(val1);
    const numStr2 = String(val2);

    if (numStr1.length !== numStr2.length) return false;

    const map = {};

    // 1. Loop through the first string
    // 2. Store each character
    // 3. Each character must be counted (repeating character values should be increased)
    // 4. Repeat the same step for the 2nd string value

    // 5. Loop through the 2nd string
    // 6. Check if the character exists inside the map
    // 7. If it does not exist or its value is falsy (0) return false

    for (const char of numStr1) {
        map[char] = (map[char] || 0) + 1;
    }

    for (const char of numStr2) {
        if (!map[char]) {
            return false;
        }

        map[char] -= 1;
    }

    return true;
}

function isPositiveInteger(val) {
    return Number.isInteger(val) && val > 0;
}

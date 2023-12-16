// Implement a function valled countUniqueValoues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in the array,
// but it will always be sorted

function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let uniqueValues = 1;

    for (let i = 1; i < arr.length; i++) {
        const curr = arr[i];
        const prev = arr[i - 1];

        if (curr !== prev) {
            uniqueValues++;
        }
    }

    return uniqueValues;
}

// Readable but slower
function countUniqueValues2(arr) {
    return new Set(arr).size;
}

const r1 = countUniqueValues([1, 1, 1, 1, 1, 2]);
const r2 = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
const r3 = countUniqueValues([]);
const r4 = countUniqueValues([-2, -1, -1, 0, 1]);

console.log(r1); // 2
console.log(r2); // 7
console.log(r3); // 0
console.log(r4); // 4

// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
    const result = [];
    // add whatever parameters you deem necessary - good luck!

    function helper(array) {
        if (array.length === 0) return;

        const currentValue = array[0];

        if (!Array.isArray(currentValue)) {
            result.push(currentValue);
        } else {
            helper(currentValue);
        }

        helper(array.slice(1));
    }

    helper(arr);

    return result;
}

const r1 = flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
const r2 = flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
const r3 = flatten([[1], [2], [3]]); // [1,2,3]
const r4 = flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3

console.log(r1);
console.log(r2);
console.log(r4);
console.log(r4);

//This algorithm should be more efficient than linearSearch
// - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
// and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const guess = arr[mid];

        if (target < guess) {
            right = mid - 1;
        } else if (target > guess) {
            left = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
    // add whatever parameters you deem necessary - good luck!
}

const r1 = binarySearch([1, 2, 3, 4, 5], 2); // 1
const r2 = binarySearch([1, 2, 3, 4, 5], 3); // 2
const r3 = binarySearch([1, 2, 3, 4, 5], 5); // 4
const r4 = binarySearch([1, 2, 3, 4, 5], 6); // -1
const r5 = binarySearch(
    [
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
        98, 99,
    ],
    10
); // 2
const r6 = binarySearch(
    [
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
        98, 99,
    ],
    95
); // 16
const r7 = binarySearch(
    [
        5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
        98, 99,
    ],
    100
); // -1

console.log(r1, r2, r3, r4, r5, r6, r7);

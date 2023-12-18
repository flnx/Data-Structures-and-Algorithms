// This pattern involves dividing a data set into smaller chunks and then
// repeating a process with a subset of data.
// This pattern can tremendously decrease time complexity

// An Example
// Given a sorted array of integers, write a function called search,
// that accepts a value and returns the index where the vlaue passed to the function is located.
// If the value is not found, return -1

function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < target) {
            left = mid + 1; // Adjust the search range to the right half
        } else if (nums[mid] > target) {
            right = mid - 1; // Adjust the search range to the left half
        } else {
            return mid; // Element found, return its index
        }
    }

    return -1;
}

const r2 = search([1, 2, 3, 4, 5, 6], 4); // 3
console.log(r2);
// const r3 = search([1, 2, 3, 4, 5, 6], 6); // 5
// const r4 = search([1, 2, 3, 4, 5, 6], 11); // -1

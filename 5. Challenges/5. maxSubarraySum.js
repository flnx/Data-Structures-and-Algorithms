// Sliding Window - maxSubarraySum

// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array.
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// Constraints:

// Time Complexity - O(N)
// Space Complexity - O(1)

function maxSubarraySum(nums, target) {
    if (nums.length < target) return null;

    let maxSum = 0;

    for (let i = 0; i < target; i++) {
        maxSum += nums[i];
    }

    let tempSum = maxSum;

    for (let i = target; i < nums.length; i++) {
        tempSum = tempSum - nums[i - target] + nums[i];

        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

const r1 = maxSubarraySum([100, 200, 300, 400], 2); // 700
const r2 = maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
const r3 = maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
const r4 = maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
const r5 = maxSubarraySum([2, 3], 3); // null

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(r5);

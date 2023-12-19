// Sliding Window - minSubArrayLen

// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray...
// ...of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

// Time Complexity - O(n)
// Space Complexity - O(1)

// Examples:

function minSubArrayLen(nums, target) {
    let start = 0;
    let end = 0;
    let minLength = Infinity;
    let sum = 0;

    while (start < nums.length) {
        // If the current sum is less than the target, extend the window to the right
        if (sum < target && end < nums.length) {
            sum += nums[end];
            end++;
        } else if (sum >= target) {
            // If the current sum is greater than or equal to the target, update the minimum length
            minLength = Math.min(minLength, end - start);
            // Move the window to the left by subtracting the value at the start index
            sum -= nums[start];
            start++;
        } else {
            // If the current sum is less than the target and we can't extend the window further, break the loop
            break;
        }
    }

    // If minLength is still Infinity, no subarray was found
    return minLength === Infinity ? 0 : minLength;
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0

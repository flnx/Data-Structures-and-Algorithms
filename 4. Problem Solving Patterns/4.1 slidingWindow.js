// Write a function called maxSubarraySum which accepts an array of integers
// and a number called n. The function should calculate
// the maximum sum of n consecutive elemnts in the array

function mxaSubArraySum(arr, n) {
    if (arr.length < n) {
        return false;
    }

    let maxSum = 0;

    // Calculate the sum of the first n elements in the array.

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    let tempSum = maxSum;

    // Slide the window through the array and find the maximum sum.

    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];

        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

const r1 = mxaSubArraySum([100, 9, 3, 4, 9, 6, 7, 100, 4, 4, 4, 8, 9, 100, 100], 3); // 24
const r2 = mxaSubArraySum([4, 5, 6, 7, 8, 9, 2, 1, 0, -5, 4, 4, 4], 2); // 17

console.log(r1);
console.log(r2);

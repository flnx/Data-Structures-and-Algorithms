// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSum(nums, target) {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (hash[complement] !== undefined && hash[complement] !== i) {
            return [hash[complement], i];
        }

        hash[nums[i]] = i;
    }

    return [];
}

// const result = twoSum([2, 7, 11, 15], 9);
// const result2 = twoSum([2, 7, 11, 15], 17);
const result3 = twoSum([2, 7, 11, 15, 3], 5);
console.log(result3);

// console.log(result); // Output: [0, 1]
// console.log(result2); // Output: [0, 1]
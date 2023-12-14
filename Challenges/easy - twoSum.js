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

function collectOddValues(arr) {
    const result = [];

    function helper(nums) {
        if (nums.length === 0) return;

        const currentNum = nums[0];

        // Check if it's odd
        if (currentNum % 2 !== 0) {
            result.push(currentNum);
        }

        const slicedArr = nums.slice(1);

        return helper(slicedArr);
    }

    helper(arr);

    return result;
}

const result = collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(result);

// Pure recursion
function collectOddValues2(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    const nums = collectOddValues2(arr.slice(1));

    newArr = newArr.concat(nums);

    return newArr;
}

const result2 = collectOddValues2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result2);


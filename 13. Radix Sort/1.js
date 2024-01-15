// A utility function to get the digit at a given place value
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// A utility function to get the number of digits in a given number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// A utility function to get the maximum number of digits in an array of numbers
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// The main radix sort function
function radixSort(nums) {
  const maxDigits = mostDigits(nums);

  for (let k = 0; k < maxDigits; k++) {
    // Create buckets for each digit (0-9)
    const buckets = Array.from({ length: 10 }, () => []);

    // Place each number in the appropriate bucket
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      buckets[digit].push(nums[i]);
    }

    // Concatenate the buckets back into the array
    nums = [].concat(...buckets);
  }

  return nums;
}

// Example usage
const arrayToSort = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(arrayToSort.slice());
console.log('Original Array:', arrayToSort);
console.log('Sorted Array:', sortedArray);

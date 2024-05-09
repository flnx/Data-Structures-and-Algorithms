// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

function countBits(n) {
  if (!Number.isInteger(n) || n < 0) return null;

  const binary = Number(n).toString(2);
  const sum = binary.split('');

  const res = sum.reduce((acc, curr) => {
    return acc += Number(curr);
  }, 0);

  return res;
}

const result = countBits(42);
const result2 = countBits(1234);

console.log(result2);

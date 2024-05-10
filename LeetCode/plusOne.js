// You are given a large integer represented as an integer array digits,
// where each digits[i] is the (i)th digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

function plusOne(digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry;
    if (sum >= 10) {
      digits[i] = sum - 10;
      carry = 1;
    } else {
      digits[i] = sum;
      carry = 0;
      break; // No need to continue if there's no carry
    }
  }
  if (carry) {
    digits.unshift(1); // If carry remains, add 1 at the beginning
  }
  
  return digits;
}

let digits;

digits = [1, 2, 3]; // [1, 2, 4];
console.log(plusOne(digits));

digits = [4, 3, 2, 1]; // [4,3,2,2];
console.log(plusOne(digits));

digits = [9]; // [1, 0];
console.log(plusOne(digits));

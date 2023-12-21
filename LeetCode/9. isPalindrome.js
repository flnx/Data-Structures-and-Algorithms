// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

function isPalindrome(x) {
    let str = String(x);
    const LEN = Math.floor(str.length / 2);

    for (let left = 0; left < LEN; left++) {
        let right = str.length - left - 1;

        if (str[left] !== str[right]) {
            return false;
        }
    }

    return true;
}

const r1 = isPalindrome(121); // true
const r2 = isPalindrome(-121); // false
const r3 = isPalindrome(12143); // false

console.log(r1, r2, r3);

// Follow up: Could you solve it without converting the integer to a string?

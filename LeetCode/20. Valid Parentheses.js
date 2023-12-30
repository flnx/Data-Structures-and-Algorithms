// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

// Constraints:

//     1 <= s.length <= 104
//     s consists of parentheses only '()[]{}'.

function isValid(s) {
    // if (typeof s !== 'string' || s === '' || s.length % 2 !== 0) return false;

    const chars = {
        '[': ']',
        '(': ')',
        '{': '}',
    };

    const result = [];

    for (let char of s) {
        // Has an opening bracket
        if (chars[char]) {
            result.push(char);
        } else {
            const last = result.pop();

            if (chars[last] !== char) {
                return false;
            }
        }
    }

    return result.length === 0;
}

const r1 = isValid('()');
const r2 = isValid('()[]{}');
const r3 = isValid('(]');
const r4 = isValid('({[]})');

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);

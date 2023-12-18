// Implement a function called, areThereDuplicates which accepts a variable number of arguments
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// ? Restrictions:

// Time - O(n)
// Space - O(n)

// ? Bonus:

// Time - O(n log n)
// Space - O(1)

const r1 = areThereDuplicates(1, 2, 3); // false
const r2 = areThereDuplicates(1, 2, 2); // true
const r3 = areThereDuplicates('a', 'b', 'c', 'a'); // true

console.log(r1, r2, r3, r4);

// Time - O(n)
// Space - O(n)

function areThereDuplicates(...args) {
    if (args.length < 1) return false;

    // Store them inside a map
    const map = {};

    // Loop through the args
    for (const char of args) {
        if (map[char]) {
            // If you find any existing character - return true
            return true;
        }

        map[char] = true;
    }

    return false;
}

function areThereDuplicates2(...args) {
    if (args.length < 1) return false;

    args.sort();

    for (let i = 0; i < args.length - 1; i++) {
        if (args[i] === args[i + 1]) {
            return true;
        }
    }

    return false;
}

function areThereDuplicates3() {
    return new Set(arguments).size !== arguments.length;
}

// Multiple Pointers Solution
function areThedreDuplicates4(...args) {
    args.sort((a, b) => a - b);

    let start = 0;
    let next = 1;

    while (next < args.length) {
        if (args[start] === args[next]) {
            return true;
        }

        start++;
        next++;
    }

    return false;
}
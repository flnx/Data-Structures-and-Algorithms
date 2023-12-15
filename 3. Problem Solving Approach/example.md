- Understand the Problem
- Explore Concrete Examples
- Break it down
- Solve/Simplify
- Look Back and Refactor

function charCount(str) {
    if (typeof str !== 'string') {
        return 'The input must be a string!';
    }

    if (!str) {
        return 'You must enter at least 1 character';
    }

    const result = {};
    const LEN = str.length;

    for (let i = 0; i < LEN; i++) {
        const currentChar = str[i].toLowerCase();

        if (isNaN(currentChar)) {
            result[currentChar] = ++result[currentChar] || 1;
        }
    }

    return result;
}

const result = charCount('Hello World 123');

console.log(result);

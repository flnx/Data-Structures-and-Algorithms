// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Constraints:

//     1 <= strs.length <= 200
//     0 <= strs[i].length <= 200
//     strs[i] consists of only lowercase English letters.

// function longestCommonPrefix(strs) {
//     if (strs.length === 0) return '';

//     let str = strs[0];

//     for (let i = 1; i < strs.length; i++) {
//         const currentElement = strs[i];
//         let j = 0;

//         while (j < str.length && j < currentElement.length && str[j] === currentElement[j]) {
//             j++;
//         }

//         str = str.substring(0, j);

//         if (str === '') return '';
//     }

//     return str;
// }

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';

    let str = strs[0];

    for (let i = 1; i < strs.length; i++) {
        const currentElement = strs[i];

        for (let j = 0; j < str.length; j++) {
            if (currentElement[j] !== str[j]) {
                str = str.substring(0, j);
                break;
            }

            if (str === '') return '';
        }
    }

    return str;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // Output: "fl"
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // Output: ""
console.log(longestCommonPrefix(['abc', 'ab', 'abcde'])); // Output: ""
console.log(longestCommonPrefix(['ab', 'a'])); // Output: ""

// Example 2

function longestCommonPrefix2(strs) {
    if (strs.length === 0) {
        return '';
    }

    // Sort the array to easily find the common prefix
    strs.sort();

    // Consider the first and last strings after sorting
    const firstStr = strs[0];
    const lastStr = strs[strs.length - 1];

    // Find the common prefix between the first and last strings
    let i = 0;
    while (i < firstStr.length && firstStr.charAt(i) === lastStr.charAt(i)) {
        i++;
    }

    // Return the common prefix
    return firstStr.substring(0, i);
}

function longestCommonPrefix(strs) {
    if (!strs.length) return '';

    for (let i = 0; i < strs[0].length; i++) {
        for (let str of strs) {
            if (str[i] !== strs[0][i]) {
                return str.slice(0, i);
            }
        }
    }

    return strs[0];
}

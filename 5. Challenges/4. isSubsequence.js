// Write a function called isSubsequence which takes in two strings and checks...
// ...whether the characters in the first string form a subsequence of the characters in the second string.
// ...In other words, the function should check whether the characters...
// ...in the first string appear somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    let i = 0; // str1 pointer
    let j = 0; // str2 pointer

    while (i < str1.length && j < str2.length) {
        const char1 = str1[i];
        const char2 = str2[j];

        if (char1 === char2) {
            i++;
        }

        j++;
    }

    return i === str1.length;
}

// const r1 = isSubsequence('hello', 'hello world'); // Output: true
// const r2 = isSubsequence('sing', 'sting'); // Output: true
// const r3 = isSubsequence('abc', 'abracadabra'); // Output: true
// const r4 = isSubsequence('abc', 'acb'); // Output: false


// recursive

function isSubsequence2(str1, str2) {
    if (str1.length === 0) {
        return true;
    }
    
    if (str2.length === 0) {
        return false;
    }
    
    if (str2[0] === str1[0]) {
        return isSubsequence(str1.slice(1), str2.slice(1));
    }
    
    
    return isSubsequence(str1, str2.slice(1));
}

const r5 = isSubsequence2('hello', 'hello world'); // Output: true
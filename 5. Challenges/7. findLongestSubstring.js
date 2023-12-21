// Write a function called findLongestSubstring,
// which accepts a string and returns the length of the longest substring with all distinct characters.

function findLongestSubstring(str) {
    if (str.length === 0) return 0;

    let len = 0;
    let currentBest = 0;

    let left = 0;
    let right = 0;
    let map = {};

    while (right < str.length) {
        let currentChar = str[right];

        if (map[currentChar] >= left) {
            // If the current character is repeated and its last occurrence is within the current window,
            // update the left index to the next index after the last occurrence.
            left = map[currentChar] + 1;
        }

        currentBest = right - left + 1;
        len = Math.max(len, currentBest);

        // Update the index of the current character.
        map[currentChar] = right;

        right++;
    }

    return len;
}

function lengthOfLongestSubstring2(s) {
    let start = 0;
    let maxLength = 0;
    let charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
            // If the character is repeated and its last occurrence is within the current window,
            // update the start index to the next index after the last occurrence.
            start = charIndexMap[char] + 1;
        }

        // Update the index of the current character.
        charIndexMap[char] = end;

        // Update the maximum length if the current window is longer.
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

function findLongestSubstring3(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }

        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char so as to not double count
        seen[char] = i + 1;
    }
    return longest;
}

const r1 = findLongestSubstring4(''); // 0
const r4 = findLongestSubstring4('thecatinthehat'); // 7
const r5 = findLongestSubstring4('bbbbbb'); // 1
const r6 = findLongestSubstring4('longestsubstring'); // 8

const r3 = findLongestSubstring4('thisisawesome'); // 6
const r2 = findLongestSubstring4('rithmschool'); // 7
const r7 = findLongestSubstring4('thisishowwedoit'); // 6

function findLongestSubstring4(str) {
    let maxLen = 0;
    let map = {};
    let left = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (map[char] !== undefined) {
            left = Math.max(map[char] + 1, left);
        }

        maxLen = Math.max(maxLen, i - left + 1);

        map[char] = i;
    }

    return maxLen;
}

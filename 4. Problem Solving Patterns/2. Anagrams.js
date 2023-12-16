// ANAGRAMS
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2) {
    if (!isInputValid()) {
        return false;
    }

    const map1 = {};
    const map2 = {};

    const LEN = str1.length;

    for (let i = 0; i < LEN; i++) {
        const letter1 = str1[i];
        const letter2 = str2[i];

        map1[letter1] = (map1[letter1] || 0) + 1;
        map2[letter2] = (map2[letter2] || 0) + 1;
    }

    for (const key in map1) {
        if (map1[key] !== map2[key]) {
            return false;
        }
    }

    return true;

    function isInputValid() {
        if (typeof str1 !== 'string' ||
        typeof str2 !== 'string' ||
        str1.length !== str2.length
        ) {
            return false;
        }

        return true;
    }
}

const result0 = validAnagram('', '');
const result1 = validAnagram('aaz', 'zza');
const result2 = validAnagram('anagram', 'nagaram');
const result3 = validAnagram('rat', 'cat');
const result4 = validAnagram('awesome', 'awesom');
const result5 = validAnagram('qwerty', 'qeywrt');
const result6 = validAnagram('texttwisttime', 'timetwisttext');

console.log(result0); // true
console.log(result1); // false
console.log(result2); // true
console.log(result3); // false
console.log(result4); // false
console.log(result5); // true
console.log(result6); // true


// More efficient solution in terms of space complexity
function validAnagram2(str1, str2) {
    if (!isInputValid()) {
        return false;
    }

    const charCount = {};

    for (const char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;

    function isInputValid() {
        return typeof str1 === 'string' && typeof str2 === 'string' && str1.length === str2.length;
    }
}

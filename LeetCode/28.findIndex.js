// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

function strStr(haystack, needle) {
  let k = 0;
  let i = 0;
  let j = 0;

  let match = '';
  let firstOccurance = 0;

  while (i < haystack.length) {
    if (haystack[i] == needle[j]) {
      match += haystack[i];
      i++;
      j++;
    } else {
      firstOccurance = k + 1;
      j = 0;
      k++;
      i = k;
      match = '';
    }
    if (match === needle) return firstOccurance;
  }

  i++;
  return -1;
}

// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// const r = strStr('sadbutsad', 'sad'); // 0

// // Explanation: "leeto" did not occur in "leetcode", so we return -1.
// const r2 = strStr('leetcode', 'leeto'); // -1

// const r3 = strStr('codeleetoz', 'leeto'); // 4

// const r4 = strStr('mississippi', 'issip'); // 4

// const r5 = strStr('mississippi', 'pi'); // 9

// console.log(r, r2, r3, r4, r5);

function strStr2(haystack, needle) {
  const result = findIndex(haystack, 0);
  return result;

  function findIndex(h, i) {
    if (i + needle.length > h.length) {
      return -1;
    }

    const substring = h.slice(i, i + needle.length);

    if (substring === needle) {
      return i;
    }

    return findIndex(h, i + 1);
  }
}

const rt = strStr2('sadbutsad', 'sad'); // 0

// Explanation: "leeto" did not occur in "leetcode", so we return -1.
const rt2 = strStr2('leetcode', 'leeto'); // -1

const rt3 = strStr2('codeleetoz', 'leeto'); // 4

const rt4 = strStr2('mississippi', 'issip'); // 4

const rt5 = strStr2('mississippi', 'pi'); // 9

console.log(rt, rt2, rt3, rt4, rt5);

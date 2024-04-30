// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

function lengthOfLastWord(s) {
  let record = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];

    if (char === ' ') {
      if (record !== 0) {
        break;
      }
    } else {
      record++;
    }
  }

  return record;
}

function lengthOfLastWord2(s) {
  let record = 0;
  s = s.trim();

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];

    if (char !== ' ') {
      record++;
    } else if (record > 0) {
      break;
    }
  }

  return record;
}

// // Explanation: The last word is "World" with length 5.
let s = 'Hello World'; // 5
lengthOfLastWord(s);

// // Explanation: The last word is "moon" with length 4.
s = '   fly me   to   the moon  '; // 4
lengthOfLastWord(s);

// // Explanation: The last word is "joyboy" with length 6.
s = 'luffy is still joyboy'; // 6
lengthOfLastWord(s);

s = 'Today is a nice day';
lengthOfLastWord(s);

s = 'a';
lengthOfLastWord(s);
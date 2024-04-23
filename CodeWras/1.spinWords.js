function spinWords(string) {
  if (string.length === 0) return string;

  const words = string.split(/\s+/);

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.length >= 5) {
      words[i] = reverseWord(word);
    }
  }

  return words.join(' ');

  function reverseWord(str) {
    let strReversed = str[str.length - 1];

    for (let i = str.length - 2; i >= 0; i--) {
      strReversed += str[i];
    }

    return strReversed;
  }
}

const input1 = "Hey fellow warriors";
const input2 = "This is a test";
const input3 = "This is another test";

const res1 = spinWords(input1);
const res2 = spinWords(input2);
const res3 = spinWords(input3);
console.log(res1);
console.log(res2);
console.log(res3);

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
  let res = '';


  for (const char of text) {
    const code = char.toUpperCase().charCodeAt();

    if (code >= 65 && code <= 90) {
      res += (code - 64) + ' ';
    }
  }

  return res.trim();
}

const r1 = alphabetPosition("The sunset sets at twelve o' clock."); //"20 8 5 19 21 14 19 5 20 19 5 20 19 1..."
const r2 = alphabetPosition('The narwhal bacons at midnight.'); // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19..."

console.log(r1)

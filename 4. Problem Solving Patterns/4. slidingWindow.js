// This pattern involves creating a window which can either be an array or number
// from one position to another.
// Depending on a certain condition, the window either can icnreases or closes (and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.

function maxSum(str) {
    let bestStreak = 0;
    let currentStreak = 0;
    let i = 0;

    let map = {};

    for (let j = 0; j < str.length; j++) {
        const letter = str[j];

        map[letter] = (map[letter] || 0) + 1;

        if (map[letter] > 1) {
            map = {};
            map[letter] = (map[letter] || 0) + 1;
            i = j;
            currentStreak = 1;
        } else {
            currentStreak++;
        }
       
        bestStreak = currentStreak > bestStreak ? currentStreak : bestStreak;
    }

    return bestStreak;
}

const r1 = maxSum('hellothere'); // 6
const r2 = maxSum('loobies'); // 5
const r3 = maxSum('1233456789'); // 5

console.log(r1);
console.log(r2);
console.log(r3);

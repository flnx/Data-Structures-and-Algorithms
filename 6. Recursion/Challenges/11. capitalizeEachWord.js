// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

function capitalizedWords(arr) {
    if (arr.length === 0) return [];

    const uppedCased = arr[0] = arr[0].toUpperCase();

    const result = [uppedCased, ...capitalizedWords(arr.slice(1))];

    return result;
}

const r = capitalizedWords(['i', 'am', 'learning', 'recursion']); // ['I', 'AM', 'LEARNING', 'RECURSION']

console.log(r)

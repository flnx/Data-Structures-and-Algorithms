// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
    if (arr.length === 0) {
        return arr;
    }

    const result = [];

    function helper(array) {
        if (array.length === 0) {
            return;
        }

        const modified = array[0][0].toUpperCase() + array[0].slice(1);

        result.push(modified);

        helper(array.slice(1));
    }

    helper(arr);

    return result;
}

const r = capitalizeFirst(['car', 'taco', 'banana']); // ['Car','Taco','Banana']
console.log(r);


function capitalizeFirst(arr) {
    // Base case: check if the array is empty
    if (arr.length === 0) {
        return [];
    }

    // Capitalize the first letter of the current string
    const firstString = arr[0];
    const capitalizedString = firstString.charAt(0).toUpperCase() + firstString.slice(1);

    // Recursively capitalize the rest of the array
    const restOfArray = capitalizeFirst(arr.slice(1));

    // Combine the capitalized string with the rest of the array
    return [capitalizedString, ...restOfArray];
}


// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// function reverse(str) {
//     let reversed = str[str.length - 1];

//     if (str.length === 1) {
//         return str[0];
//     }

//     let sliced = str.slice(0, -1);

//     reversed += reverse(sliced);

//     return reversed;
// }

// const r = reverse('awesome'); // 'emosewa'
// const r2 = reverse('rithmschool'); // 'loohcsmhtir'

// console.log(r);
// console.log(r2);

function reverse2(str) {
    // Base case: if the string is empty or has only one character, it's already reversed
    if (str.length <= 1) {
        return str;
    }
    
    const slicedStr = str.slice(1);
    const char = str[0];

    const r = reverse2(slicedStr) + char;

    return r;
}

const r3 = reverse2('awesome');
const r4 = reverse2('rithmschool');

console.log(r4);


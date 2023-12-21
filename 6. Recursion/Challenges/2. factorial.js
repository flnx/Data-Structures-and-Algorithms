// Write a function factorial which accepts a number and returns the factorial of that number. 
// A factorial is the product of an integer and all the integers below it; 
// e.g.,  factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

function factorial(n){
    if (n <= 1) return 1;

    return n * factorial(n - 1);
}

const r1 = factorial(1);
const r2 = factorial(2);
const r3 = factorial(4);
const r4 = factorial(7);

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all. 

function productOfArray(arr) {
    if (arr.length == 0) return 1; 

    const r = arr[0] * productOfArray(arr.slice(1));

    return r;
}

const r1 = productOfArray([1, 2, 3]); // 6
const r2 = productOfArray([1, 2, 3, 10]); // 60

console.log(r1);
console.log(r2);
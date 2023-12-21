// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
//This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exponent) {
    if (exponent === 0) return 1;

    let result = base;

    function helper() {
        exponent -= 1;

        if (exponent === 0) {
            return;
        }

        result = result * base;

        helper();
    }

    helper();

    return result;
}

const r1 = power(2, 0); // 1
const r2 = power(2, 2); // 4
const r3 = power(2, 12); // 16

// console.log(r1);
// console.log(r2);
// console.log(r3);

// without a helper

function power2(base, exponent) {
    // Base case: if exponent is 0, return 1
    if (exponent === 0) {
        return 1;
    }

    const result = power2(base, exponent - 1);

    console.log(base, result)

    return result * base;
}

power2(2, 3);

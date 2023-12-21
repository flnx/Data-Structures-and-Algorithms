function factorial(n) {
    if (n <= 1) return 1;

    return n * factorial(n - 1);
}

const r = factorial(3);
console.log(r);

// Non-recursive
function factorial2(num) {
    let total = 1;

    for (let i = num; i > 1; i--) {
        total *= i;
    }

    return total;
}

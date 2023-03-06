1. Rather than counting seoncs, which are so variable... Let's count the number of simple operations the computer has to perform!

O(1)

function addUpTo2(n) {
return n \* (n + 1) / 2;
}

We have: multiplicationm addition, division - So 3 operations

So it does not matter what (n) is. There operations will always be the same number, regardless of the size of (n).
Let's compare it to the other solution

O(n)

function addUpTo(n) {
let total = 0; 1 assignment

    for (let i = 1; i <= n; i++) { =, <= / i++, These simple operations, they happen more as N grows. They scale with n
        total += i;  <<<<<< n additions and n assignments (+ and =) as N grows
        }

    return total;

}

Depending on what we count, the number of operations can be as low as 2n or as high as 5n + 2
So if (n) is 10 we have 52 operations.

As (n) grows, the number of operations grow with proportion with N

So, as N grows, the time grows in proprotion.

O(n2)

function addUpTo(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {

        }
    }

    return total;
}

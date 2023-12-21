// Write a recursive function called nestedEvenSum.
// Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(object) {
    let counter = 0;

    helper(object);

    function helper(obj) {
        for (const key in obj) {
            const value = obj[key];

            if (typeof value === 'number' && value % 2 === 0) {
                counter += value;
            } else if (typeof value === 'object' && !Array.isArray(value)) {
                helper(value);
            }
        }
    }

    return counter;
}

const obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: 'yup',
        },
    },
};

const obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' },
};

const r = nestedEvenSum(obj1); // 6
const r2 = nestedEvenSum(obj2); // 10

console.log(r);
console.log(r2);

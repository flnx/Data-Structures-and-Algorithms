// Write a function called collectStrings which accepts an object...
// ...and returns an array of all the values in the object that have a typeof string

function collectStrings(obj) {
    const result = [];

    function helper(newObj) {
        for (const key in newObj) {
            const value = newObj[key];

            if (typeof value === 'string') {
                result.push(value);
            } else if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
                helper(value);
            }
        }
    }

    helper(obj);

    return result;
}


const obj = {
    stuff: 'foo',
    data: {
        val: {
            thing: {
                info: 'bar',
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: 'baz',
                    },
                },
            },
        },
    },
};

const r = collectStrings(obj); // ["foo", "bar", "baz"])

console.log(r);

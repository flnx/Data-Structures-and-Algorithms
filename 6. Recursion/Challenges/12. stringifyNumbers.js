// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!

function stringifyNumbers(obj) {
    const newObj = JSON.parse(JSON.stringify(obj));

    function helper(newObj) {
        

        for (const key in newObj) {
            const value = newObj[key];

            if (typeof value === 'number') {
                newObj[key] = String(value);
            } else if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
                helper(value);
            }
        }
    }

    helper(newObj);

    return newObj;
}

const obj1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66,
        },
    },
};

const obj2 = {
    num: '1',
    test: [],
    data: {
        val: '4',
        info: {
            isRight: true,
            random: '66',
        },
    },
};

const r1 = stringifyNumbers(obj1);
// console.log(r1);

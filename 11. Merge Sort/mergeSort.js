function merge(arr1, arr2) {
    const result = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function mergeSort(unsortedArr) {
    // base
    if (unsortedArr.length <= 1) return unsortedArr;

    const mid = Math.floor(unsortedArr.length / 2);

    const left = mergeSort(unsortedArr.slice(0, mid));
    const right = mergeSort(unsortedArr.slice(mid));

    return merge(left, right);
}

const r1 = mergeSort([2, 6, 3, 5, 1, 4, 7, 8, 9, 10]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(r1);
// console.log(r2);
// console.log(r3);

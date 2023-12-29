function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];

        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
            console.log(i, arr);
        }

        arr[j + 1] = current;
    }

    return arr;
}

// insertionSort([1, 5, 2, 3, 4, 6, 7, 9, 8]);
// insertionSort([6, 2, 3, 4, 5, 1]);
const r3 = insertionSort([2, 6, 3, 4, 5, 1]);
// [2, 6, 3, 4, 5, 1]
// [2, 6, 3, 4, 5, 1]

console.log(r3);

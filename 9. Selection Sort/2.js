function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        
        if (i != min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }

    return arr;
}

let inputArr = [5, 2, 4, 6, 1, 3];
const r = selectionSort(inputArr);
console.log(r);

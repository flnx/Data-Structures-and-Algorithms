function bubbleSort(arr) {
    const LEN = arr.length;

    let isSwapped = false;

    for (let i = 0; i < LEN; i++) {
        isSwapped = false;

        for (let j = 0; j < LEN - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }

        // IF no two elements were swapped
        // by inner loop, then break
        if (!isSwapped) {
            break;
        }
    }

    // Print the array
    console.log(arr);
}

let arr = [243, 45, 23, 356, 3, 5346, 35, 5];

// calling the bubbleSort Function
bubbleSort(arr);

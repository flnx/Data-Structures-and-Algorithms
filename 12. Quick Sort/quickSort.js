function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, 1);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;

    function swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
        return arr;
    }

    return arr;
}

const r1 = quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);

console.log(r1);

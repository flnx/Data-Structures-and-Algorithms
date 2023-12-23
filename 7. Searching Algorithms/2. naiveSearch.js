function naiveSearch(long, short) {
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            const longChar = long[i + j];

            const shortChar = short[j];

            if (longChar !== shortChar) break;

            if (j === short.length - 1) {
                return true;
            }
        }
    }

    return false;
}

console.log(naiveSearch('lorie loled', 'lol'));

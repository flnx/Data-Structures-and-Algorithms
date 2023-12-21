function isPalindrome(x) {
    let str = String(x);
    const LEN = Math.floor(str.length / 2);

    for (let left = 0; left < LEN; left++) {
        let right = str.length - left - 1;

        if (str[left] !== str[right]) {
            return false;
        }
    }

    return true;
}

const r = isPalindrome(121);

console.log(r);

// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome
// (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str) {
    // add whatever parameters you deem necessary - good luck!
    if (str.length <= 1) return true;
    
    let firstChar = str[0];
    let lastChar = str[str.length -1];

    if (firstChar === lastChar) {
        return isPalindrome(str.slice(1, str.length - 1));
    }

    return false;
}

const r1 = isPalindrome('awesome') // false
const r2 = isPalindrome('foobar') // false
const r3 = isPalindrome('tacocat') // true
const r4 = isPalindrome('amanaplanacanalpanama') // true
const r5 = isPalindrome('amanaplanacanalpandemonium') // false


console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(r5);
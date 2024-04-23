function sumTwoSmallestNumbers(numbers) {
  let smallest1 = Number.MAX_SAFE_INTEGER;
  let smallest2 = Number.MAX_SAFE_INTEGER;

  for (const num of numbers) {
    if (num < smallest1) {
      smallest2 = smallest1;
      smallest1 = num;
    } else if (num < smallest2) {
      smallest2 = num;
    }
  }

  return smallest1 + smallest2;
}
// const r = sumTwoSmallestNumbers([5, 8, 12, 19, 22]); // "Sum should be 13"
const r1 = sumTwoSmallestNumbers([15, 28, 4, 2, 43]); //"Sum should be 6"
// const r2 = sumTwoSmallestNumbers([3, 87, 45, 12, 7]); //"Sum should be 10"
// const r3 = sumTwoSmallestNumbers([23, 71, 33, 82, 1]); //"Sum should be 24"
// const r4 = sumTwoSmallestNumbers([52, 76, 14, 12, 4]); //"Sum should be 16"

console.log(r);
console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);

function maskify(cc) {
  if (cc.length <= 4) return cc;

  return '#'.repeat(cc.length - 4) + cc.slice(-4);
}

const res1 = maskify('4556364607935616');
const res2 = maskify('1');
const res3 = maskify('11111');

console.log(res1);
console.log(res2);
console.log(res3);
console.log("");

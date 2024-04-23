function openOrSenior(data) {
  const memberships = data.map((arr) => {
    const age = arr[0];
    const handicapLevel = arr[1];

    if (age >= 55 && handicapLevel > 7) {
      return 'Senior';
    }

    return 'Open';
  });

  return memberships;
}

const input1 = [[45, 12],[55,21],[19, -2],[104, 20]]
const input2 = [[3, 12],[55,1],[91, -2],[53, 23]];
const input3 = [[59, 12],[55,-1],[12, -2],[12, 12]];

console.log(openOrSenior(input1));
console.log(openOrSenior(input2));
console.log(openOrSenior(input3));
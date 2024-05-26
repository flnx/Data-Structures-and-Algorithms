// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbStairs(n) {
  // Base cases
  if (n <= 1) {
    return 1;
  }

  // Array to store the number of ways to reach each step
  let waysToReachStep = new Array(n + 1);

  // Initialize base cases
  waysToReachStep[0] = 1; // 1 way to stay at the ground (doing nothing)
  waysToReachStep[1] = 1; // 1 way to reach the first step

  // Fill the array using the recurrence relation
  for (let i = 2; i <= n; i++) {
    waysToReachStep[i] = waysToReachStep[i - 1] + waysToReachStep[i - 2];
  }

  // The number of ways to reach the nth step
  return waysToReachStep[n];
}

// Example usage:
console.log(climbStairs(2)); // Output: 2 (1+1, 2)
console.log(climbStairs(3)); // Output: 3 (1+1+1, 1+2, 2+1)
console.log(climbStairs(4)); // Output: 5 (1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2)
console.log(climbStairs(5)); // Output: 8

//https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
function divisibleSumPairs(n, k, ar) {
  let result = 0;
  for (let i = 0, j = 1; true; j++) {
    if ((ar[i] + ar[j]) % k === 0) result++;
    if (i === n - 2) return result;
    if (j === n) {
      i++;
      j = i;
    }
  }
}
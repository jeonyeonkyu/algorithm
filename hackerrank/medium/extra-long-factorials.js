//https://www.hackerrank.com/challenges/extra-long-factorials/problem
function extraLongFactorials(n) {
  let result = BigInt(1);
  for (let i = n; i > 1; i--) {
    result *= BigInt(i);
  }
  console.log(result + '');
}
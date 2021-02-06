//https://www.hackerrank.com/challenges/staircase/problem
function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let str = '';
    console.log(str.padStart(n - i, ' ').padEnd(n, '#'));
  }
}
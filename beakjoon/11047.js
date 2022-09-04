const fs = require('fs')
const input = fs.readFileSync('./test.txt').toString().trim().split('\n').map(v => v.trim());

const [N, K] = input[0].split(' ').map(Number)

const coins = input.slice(1).map(Number)

let resultCoin = K
let result = 0;
for (let i = N - 1; i >= 0; i--) {
  while (resultCoin - coins[i] >= 0) {
    resultCoin -= coins[i]
    result++;
  }
}
console.log(result)
const fs = require('fs')
const input = fs.readFileSync('./test.txt').toString().split('\n')

const N = Number(input.shift())
const stairs = input.map(Number)

const dp = Array.from({ length: N }, () => 0)

dp[0] = stairs[0]
dp[1] = stairs[0] + stairs[1]
dp[2] = Math.max(stairs[1] + stairs[2], stairs[0] + stairs[2])
for (let i = 3; i < N; i++) {
  dp[i] = Math.max(stairs[i] + dp[i - 2], stairs[i] + stairs[i - 1] + dp[i - 3])
}
console.log(dp[N - 1])

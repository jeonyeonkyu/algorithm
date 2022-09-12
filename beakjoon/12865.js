const fs = require('fs')
const input = fs.readFileSync('./test.txt').toString().split('\n')

const [N, K] = input.shift().split(' ').map(Number)

const bags = input.map((v) => v.split(' ').map(Number))

const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: K + 1 }, () => 0)
)

for (let i = 1; i < N + 1; i++) {
  const [weight, value] = bags[i - 1]
  for (let j = 1; j < K + 1; j++) {
    if (j < weight) {
      dp[i][j] = dp[i - 1][j]
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], value + dp[i - 1][j - weight])
    }
  }
}
console.log(dp[N][K])

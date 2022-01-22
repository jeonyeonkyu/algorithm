const fs = require('fs')
const [_, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const words = input.split('').reduce((acc, cur) => {
  acc[cur] = ++acc[cur] || 1
  return acc
}, {})

console.log(
  Object.entries(words)
    .sort((a, b) => b[1] - a[1])[0]
    .join(' ')
)
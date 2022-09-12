const fs = require('fs')
const [_, ...input] = fs
  .readFileSync('./test.txt')
  .toString()
  .trim()
  .split('\n')

for (const VPS of input) {
  const words = []
  let flag = true
  for (const oneWord of VPS) {
    if (oneWord === '(') {
      words.push('(')
    } else if (oneWord === ')') {
      const left = words.pop()
      if (left !== '(') {
        flag = false
        break
      }
    }
  }
  if (!flag || words.length) {
    console.log('NO')
  } else {
    console.log('YES')
  }
}

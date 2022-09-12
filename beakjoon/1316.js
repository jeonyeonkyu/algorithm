const fs = require('fs')
const [_, ...input] = fs
  .readFileSync('./test.txt')
  .toString()
  .trim()
  .split('\n')

let result = 0
for (const word of input) {
  const obj = {}
  let flag = 1
  for (let i = 0; i < word.length; i++) {
    if (i !== 0 && word[i] !== word[i - 1] && obj[word[i]]) {
      flag = 0
      break
    } else {
      obj[word[i]] = 1
    }
  }
  result += flag
}

console.log(result)

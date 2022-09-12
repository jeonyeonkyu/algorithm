const fs = require('fs')
const input = fs.readFileSync('./test.txt').toString().split('\n').map(v => v.trim())

const MAX = Number(input.shift())
const length = Number(input.shift())
const word = input.shift()
let result = 0;
let len = 0;
for (let i = 1; i < length - 1; i++) {
  if (word[i - 1] === 'I' && word[i] === 'O' && word[i + 1] === 'I') {
    len++;
    i++;
  } else {
    len = 0;
  }
  if (MAX <= len) {
    result++;
  }
}

console.log(result)
const fs = require('fs')
const [_, input] = fs.readFileSync('./test.txt').toString().trim().split('\n')

let result = 0
for (let i = 0; i < input.length; i++) {
  result += parseInt(input[i])
}
console.log(result)

const fs = require('fs')
const input = fs.readFileSync('./test.txt').toString().trim()

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const result = alphabet.split('').map((v) => input.indexOf(v))
console.log(result.join(' '))

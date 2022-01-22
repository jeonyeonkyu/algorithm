const fs = require('fs')
const [_, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const inputArray = input.split(' ').map(Number)
const penguinIndex = inputArray.indexOf(-1)
const prevArray = inputArray.slice(0, penguinIndex)
const nextArray = inputArray.slice(penguinIndex + 1)
console.log(Math.min(...prevArray) + Math.min(...nextArray))
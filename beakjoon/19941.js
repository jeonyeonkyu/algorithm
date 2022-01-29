const fs = require('fs')
const [counts, inputString] = fs.readFileSync('./test.txt').toString().split('\n').map(v => v.trim());
const [length, distance] = counts.split(' ').map(Number)
const input = inputString.split('')

function solution() {
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (input[i] === 'H' || input[i] === '') continue;
    for (let j = i - distance; j <= i + distance; j++) {
      if (input[j] === 'H') {
        input[j] = ''
        count++;
        break;
      }
    }
  }
  return count;
}

console.log(solution())


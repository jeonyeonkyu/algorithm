const fs = require('fs')
const input = fs.readFileSync('./test.txt').toString()
const num = Number(input)

function solution(num) {
  if (num === 7 || num === 4) {
    return -1;
  }
  let count = 0;

  while (num) {
    if (num < 5) {
      if (num === 4 || num === 2) {
        count++;
      }
      count++;
      return count;
    }
    count++;
    num -= 5
  }
  return count;
}

console.log(solution(num))

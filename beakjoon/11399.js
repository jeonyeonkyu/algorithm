//https://www.acmicpc.net/problem/11399

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(v => v.trim());

const length = Number(input[0]);
const peopleArray = input[1].split(' ').map(Number);
const sortedPeopleArray = [...peopleArray].sort((a, b) => b - a);

let count = 0;
for (let i = 0; i < length; i++) {
  for (let j = i; j < length; j++) {
    count += sortedPeopleArray[j]
  }
}

console.log(count) 
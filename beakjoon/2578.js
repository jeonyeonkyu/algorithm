const fs = require('fs')
const input = fs
  .readFileSync('./test.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number))

const bingoArray = input.slice(0, 5)
const gradingArray = input.slice(5).flat()

function solution() {
  const MAX_CHECK_COUNT = 3

  for (let i = 0; i < gradingArray.length; i++) {
    let count = 0

    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < 5; k++) {
        if (bingoArray[j][k] === gradingArray[i]) {
          bingoArray[j][k] = 0
        }
      }
    }

    const rotateArray = getRotateArray(bingoArray)
    const xArray1 = bingoArray.reduce((acc, cur, i) => {
      acc.push(cur[i])
      return acc
    }, [])

    const xArray2 = bingoArray.reduce((acc, cur, i) => {
      acc.push(cur[4 - i])
      return acc
    }, [])

    for (let i = 0; i < 5; i++) {
      if (checkBingo(bingoArray[i])) {
        count++
      }
      if (checkBingo(rotateArray[i])) {
        count++
      }
    }

    if (checkBingo(xArray1)) {
      count++
    }

    if (checkBingo(xArray2)) {
      count++
    }

    if (count >= MAX_CHECK_COUNT) {
      return i + 1
    }
  }
}

function getRotateArray(array) {
  let result = Array.from(
    { length: 5 },
    () => Array.from({ length: 5 }),
    () => 0
  )
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      result[i][j] = array[j][array.length - 1 - i]
    }
  }
  return result
}

function checkBingo(array) {
  const result = array.every((v) => v === 0)
  return result
}

console.log(solution())

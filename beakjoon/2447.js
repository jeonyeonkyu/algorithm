const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString()

function solution(number) {
  const array = Array.from({ length: number }, () =>
    Array.from({ length: number }, () => '*')
  )

  const isRemove = (removeIndex, index, plus) => {
    return removeIndex + plus <= index && removeIndex * 2 + plus > index
  }

  const recursion = (num, array, firstNum = number) => {
    let removeIndex = num / 3
    let plusI = 0
    let plusJ = 0

    for (let i = 0; i < firstNum; i++) {
      for (let j = 0; j < firstNum; j++) {
        if (
          isRemove(removeIndex, i, plusI) &&
          isRemove(removeIndex, j, plusJ)
        ) {
          array[i][j] = ' '
        }

        if ((j + 1) % num === 0) {
          plusJ += num
        }
      }
      plusJ = 0
      if ((i + 1) % num === 0) {
        plusI += num
      }
    }
    return removeIndex !== 1 ? recursion(removeIndex, array) : array
  }
  return recursion(number, array)
    .map((v) => v.join(''))
    .join('\n')
}

console.log(solution(Number(input)))

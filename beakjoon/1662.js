const fs = require('fs')
const input = fs.readFileSync('./test.txt').toString().trim().split('')

const solution = (strings) => {
  let index = 0

  const dfs = (prevCount = 0) => {
    let length = 0
    while (index < strings.length) {
      const char = strings[index++]
      switch (char) {
        case '(':
          length += Number(prevCount) * dfs(strings[index - 1]) - 1
          break
        case ')':
          return length
        default:
          length++
          prevCount = char
          break
      }
    }
    return length
  }

  return dfs()
}

console.log(solution(input))

//https://www.hackerrank.com/challenges/counting-valleys/problem
function countingValleys(steps, path) {
  let valley = 0;
  let result = 0;
  for (let i = 0; i < path.length; i++) {
    if (path[i] === 'U') {
      result++;
    } else if (path[i] === 'D') {
      if (result === 0) {
        valley++;
      }
      result--;
    }
  }
  return valley;
}
//https://www.hackerrank.com/challenges/mini-max-sum/problem
function miniMaxSum(arr) {
  console.log(selectSortSum(arr, (a, b) => a - b), selectSortSum(arr, (a, b) => b - a))
}

function selectSortSum(arr, callback) {
  return [...arr].sort(callback)
    .filter((_, i) => i < 4)
    .reduce((acc, cur) => acc + cur);
}
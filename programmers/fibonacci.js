//https://programmers.co.kr/learn/courses/30/lessons/12945
function solution(n) {
  let answer = 0;
  let [first, last] = [0, 1];
  for (let i = 1; i < n; i++) {
    answer = first + last;
    first = last % 1234567;
    last = answer % 1234567;
  }
  return answer % 1234567;
}
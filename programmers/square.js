//https://programmers.co.kr/learn/courses/30/lessons/62048
function solution(w, h) {
  const max = Math.max(w, h);
  const min = Math.min(w, h);
  let commonFactor = 0;

  for (let i = 1; i <= max; i++) {
    if (max % i === 0 && min % i === 0) {
      commonFactor = i;
    }
  }

  return min * max - (min + max - commonFactor)
}
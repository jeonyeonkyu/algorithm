//https://programmers.co.kr/learn/courses/30/lessons/12982
function solution(d, budget) {
  let count = 0;
  let money = budget;
  const sortedArray = d.sort((a, b) => a - b);
  sortedArray.forEach((element) => {
    if (money >= element) {
      money -= element;
      count++;
    }
  })
  return count;
}
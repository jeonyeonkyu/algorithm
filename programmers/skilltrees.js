//https://programmers.co.kr/learn/courses/30/lessons/49993
function solution(skill, skill_trees) {
  var answer = 0;
  skill_trees.forEach(element => {
    let flag = true;
    let skillConfirm = skill;
    for (let j = 0; j < element.length; j++) {
      if (skillConfirm.includes(element[j])) {
        if (skillConfirm[0] === element[j]) {
          skillConfirm = skillConfirm.slice(1);
        } else {
          flag = false;
          break;
        }
      }
    }
    if (flag) {
      answer++;
    }
  })
  return answer;
}
function solution(s) {
  const array = changeStringToArray(s);
  const result = [];
  array.sort((a, b) => a.length - b.length);
  array.forEach(singleArray => {
    singleArray.forEach(number => {
      if (!result.includes(number)) {
        result.push(number)
      }
    })
  })
  return result;
}

function changeStringToArray(s) {
  const answer = [];
  let index = 0;
  let number = '';
  let flag = true;
  const str = s.slice(1, s.length - 1);
  for (let val of str) {
    if (val === '{') {
      flag = true;
      answer[index] = [];
    } else if (val === '}') {
      answer[index].push(Number(number));
      flag = false;
      number = '';
      index++;
    } else if (/[0-9]/.test(val)) {
      number += val;
    } else if (val === ',') {
      if (flag) {
        answer[index].push(Number(number));
        number = '';
      }
    }
  }
  return answer;
}
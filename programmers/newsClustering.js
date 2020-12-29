//https://programmers.co.kr/learn/courses/30/lessons/17677
function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  let inputArray1 = [];
  let inputArray2 = [];
  for (let i = 0; i < str1.length; i++) {
    if (i === 0) continue;
    inputArray1.push([str1[i - 1], str1[i]]);
  }
  for (let i = 0; i < str2.length; i++) {
    if (i === 0) continue;
    inputArray2.push([str2[i - 1], str2[i]]);
  }

  inputArray1 = inputArray1.filter(ele => /^[A-Z]*$/g.test(ele.join('')));
  inputArray2 = inputArray2.filter(ele => /^[A-Z]*$/g.test(ele.join('')));

  let intersectionCount = 0;
  let sumOfSetsCount = inputArray1.length + inputArray2.length;
  let maxLength = Math.max(inputArray1.length, inputArray2.length);

  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < maxLength; j++) {
      if (inputArray1[i] && inputArray2[j] &&
        inputArray1[i][0] === inputArray2[j][0] &&
        inputArray1[i][1] === inputArray2[j][1]) {
        intersectionCount++;
        sumOfSetsCount--;
        inputArray2.splice(j, 1);
        break;
      }
    }
  }

  let result = 0;
  if (intersectionCount === 0 && sumOfSetsCount === 0) {
    result = 65536;
  } else if (intersectionCount === 0 || sumOfSetsCount === 0) {
    result = 0;
  } else {
    result = Math.floor((intersectionCount / sumOfSetsCount) * 65536)
  }
  return result;
}
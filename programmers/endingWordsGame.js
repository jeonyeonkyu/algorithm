function solution(n, words) {
  const passedArray = [];
  let quizNumber = 0;
  let quizOrder = 0;
  let lastAlphabet = '';
  for (let i = 0; i < words.length; i++) {
    const isSame = passedArray.some((element) => element === words[i]);
    passedArray.push(words[i]);
    if (i >= 1 && lastAlphabet !== words[i].slice(0, 1) || isSame) {
      quizNumber = i % n + 1
      quizOrder = Math.ceil(passedArray.length / n);
      break;
    }
    lastAlphabet = words[i].slice(words[i].length - 1);
  }
  return [quizNumber, quizOrder];
}


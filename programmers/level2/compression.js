const alphabet = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10,
  K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18,
  S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
}

function solution(msg) {
  let answer = [];
  msg = msg.split('');
  let num = 27;
  for (let i = 0; i < msg.length; i++) {
    if (msg[i + 1] && Object.keys(alphabet).includes(msg[i] + msg[i + 1])) {
      msg[i + 1] = msg[i] + msg[i + 1];
    } else {
      answer.push(alphabet[msg[i]]);
      alphabet[msg[i] + msg[i + 1]] = num++;
    }
  }
  return answer;
}
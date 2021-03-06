//https://programmers.co.kr/learn/courses/30/lessons/72410
function solution(new_id) {
  const step1 = new_id.toLowerCase();
  const step2 = step1.replace(/[^0-9\.a-z-_]/g, '');
  const step3 = step2.replace(/\.{2,}/g, '.');
  const step4 = step3.replace(/^\.|\.$/, '');
  const step5 = step4 || 'a';
  const step6 = step5.slice(0, 15).replace(/\.$/, '');
  const step7 = step6.padEnd(3, step6.slice(-1));
  return step7;
}
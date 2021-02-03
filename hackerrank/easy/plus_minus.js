//https://www.hackerrank.com/challenges/plus-minus/problem
function plusMinus(arr) {
  const length = arr.length;
  const plus = arr.filter(ele => ele > 0);
  const zero = arr.filter(ele => ele === 0);
  const minus = arr.filter(ele => ele < 0);
  console.log(plus.length / length);
  console.log(minus.length / length);
  console.log(zero.length / length);
}
//https://www.hackerrank.com/challenges/birthday-cake-candles/problem
function birthdayCakeCandles(candles) {
  const maxCandle = Math.max(...candles);
  return candles.filter(e => e === maxCandle).length;
}

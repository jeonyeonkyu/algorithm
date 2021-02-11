//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];
  let minCount = 0;
  let maxCount = 0;
  scores.forEach((score) => {
    if (score < min) {
      min = score;
      minCount++;
    } else if (score > max) {
      max = score;
      maxCount++;
    }
  })
  return [maxCount, minCount];
}
//https://leetcode.com/problems/max-consecutive-ones/submissions/
const findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let count = 0;
  nums.forEach(num => {
    count = num ? count + 1 : 0;
    if (count > maxCount) {
      maxCount = count;
    }
  })
  return maxCount;
};
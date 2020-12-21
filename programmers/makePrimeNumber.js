//https://programmers.co.kr/learn/courses/30/lessons/12977
function solution(nums) {
    let answer = 0;
    for (let i = 0, j = 1, k = 2; ;) {
        console.log(`${nums[i]},${nums[j]},${nums[k]}`)
        answer += isPrimeNumber(nums[i] + nums[j] + nums[k]);
        if (i === nums.length - 3) {
            break;
        }
        if (j === nums.length - 2) {
            i++;
            j = i;
        }
        if (k === nums.length - 1) {
            j++;
            k = j + 1;
            continue;
        }
        k++;
    }
    return answer;
}
function isPrimeNumber(sum) {
    for (let i = 2; i < sum; i++) {
        if (sum % i === 0) {
            return 0;
        }
    }
    return 1;
}
solution([1, 2, 3, 4, 5]);
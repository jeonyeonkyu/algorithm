//https://programmers.co.kr/learn/courses/30/lessons/12977
function solution(nums) {
    let answer = 0;
    for (let i = 0, j = 1, k = 2; ;) {
        answer += isPrimeNumber(nums[i], nums[j], nums[k]) === 1 ? 1 : 0;
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
function isPrimeNumber(i, j, k) {
    const sum = i + j + k;
    for (let i = 2; i < sum; i++) {
        if (sum % i === 0) {
            return -1;
        }
    }
    return 1;
}
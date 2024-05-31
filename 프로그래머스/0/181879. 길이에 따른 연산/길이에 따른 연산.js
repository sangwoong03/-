function sum(nums) {
    return nums.reduce((acc, cur) => acc + cur, 0);
}
function multiply(nums) {
    return nums.reduce((acc, cur) => acc * cur, 1);
}

function solution(nums) {    
    return nums.length >= 11 ? sum(nums) : multiply(nums);
}
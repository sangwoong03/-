function solution(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    while(num !== 1) {
      if (num % 2 === 0) num = num / 2;
      else num = (num-1) /2;
      count++
    }
  } 
  return count
}
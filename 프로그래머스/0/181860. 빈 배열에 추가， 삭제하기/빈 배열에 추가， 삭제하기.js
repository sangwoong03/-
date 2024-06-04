/*
* flag[i]가 true일 때 arr[i] 뒤에 arr[i] x 2만큼 추가
* flag[i]가 false일 때 마지막 arr[i]개의 원소 제거 후 x를 반환 
*/

const solution = (arr, flag) => {
  const answer = [];
  for (let i = 0; i < flag.length; i++) {
    const isTrue = flag[i];
    if (isTrue) {
      answer.push(...new Array(arr[i] * 2).fill(arr[i]));
    } else {
      answer.length -= arr[i];
    }
  }
  return answer;
}
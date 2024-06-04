/*
* i의 초기값을 0으로 설정한다.
* i가 arr의 길이보다 작으면 다음을 반복한다.
* stk가 빈배열이라면 arr[i]를 stk에 추가하고 i에 1을 더한다.
* stk가 빈배열이 아니고, stk 마지막 요소가 arr[i]와 같으면 stk 마지막 요소를 제거하고 i에 1을 더한다.
* stk가 빈배열이 아니고, stk 마지막 요소가 arr[i]와 다르면 stk 마지막 요소에 arr[i]를 추가하고 i에 1을 더한다.
*/

const solution = (arr) => {
  const answer = [];
  for (const elem of arr) {
    if (answer.length > 0 && answer[answer.length - 1] === elem) {
      answer.pop();
    } else {
      answer.push(elem);
    }
  }
  return answer.length ? answer : [-1];
}

/*
* arr의 요소 중 중복을 제거한 값을 answer배열에 넣는다.
* answer 배열의 길이가 k보다 작으면 부족한만큼 -1을 추가한다.
*/

const solution = (arr, k) => {
  const newArr = [...new Set(arr)];
  
  if (newArr.length > k) return newArr.slice(0, k)
  
  return [...newArr, ...new Array(k - newArr.length).fill(-1)]
}

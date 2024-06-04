/*
* arr 길이가 홀수라면 arr의 모든 짝수 요소에 n을 더함.
* arr 길이가 짝수라면 arr의 모든 홀수 요소에 n을 더함.
*/

const solution = (arr, n) => {
    return arr.map((elem, index, self) => {
      if (self.length % 2 === 0) {
        if (index % 2 !== 0) return elem + n
      } else {
        if (index % 2 === 0) return elem + n
      }
      return elem
    })
}
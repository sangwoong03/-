// function solution(arr, idx) {
//     const res = arr.slice(idx).indexOf(1);
//     return res > -1 ? res + idx : res;
// }

const solution = (a,i) => a.indexOf(1, i);
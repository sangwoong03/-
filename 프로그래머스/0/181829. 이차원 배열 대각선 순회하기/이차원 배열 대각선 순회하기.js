// const solution = (arr, k) => {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++){
//       if (i + j <= k) {
//         result += arr[i][j]
//       }
//     }
//   }
//   return result
// }
function solution(board, k) {
    let totalSum = 0;
    let rows = board.length;
    let cols = board[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (i + j <= k) {
                totalSum += board[i][j];
            }
        }
    }

    return totalSum;
}

const solution = (arr, k) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++){
      if (i + j <= k) {
        result += arr[i][j]
      }
    }
  }
  return result
}

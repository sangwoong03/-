const solution = (arr) => {
  const arrLength = arr.length;
  
  if ((arrLength & (arrLength - 1)) === 0) {
    return arr;
  }

  const nextPowerOfTwo = Math.pow(2, Math.ceil(Math.log2(arrLength)));

  return [...arr, ...new Array(nextPowerOfTwo - arrLength).fill(0)];
}
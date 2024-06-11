const solution = (n) => {
  if (n % 7 > 0) return parseInt(n / 7) + 1;
  if (n % 7 === 0) return Math.ceil(n / 7)
  return 1;
}
const solution = (babblings) => {
  let answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;
  babblings.forEach(babbling => {
    if (regex.test(babbling)) answer++;
  })
  return answer;
}

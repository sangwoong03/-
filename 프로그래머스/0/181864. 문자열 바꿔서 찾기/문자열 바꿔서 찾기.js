const solution = (str, pat) => {
  const strArr = [...str]
  const newArr = [];
  strArr.map(elem => {
    if (elem === 'A') newArr.push('B')
    else newArr.push('A')
  })
  
  return +newArr.join('').includes(pat)
}

const solution = (my_string) => {
    const numsArr = [...my_string].filter(elem => parseInt(elem))
    const answer = numsArr.reduce((acc, cur) => +acc + +cur)
    return answer
}
const solution = (numbers) => {
    const len = numbers.length;
    const sum = numbers.reduce((acc,cur) => acc + cur);
    return sum / len;
}
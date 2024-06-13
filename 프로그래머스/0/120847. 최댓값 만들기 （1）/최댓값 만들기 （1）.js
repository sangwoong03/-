function solution(numbers) {
    const newNums = numbers.sort((a, b) => b - a);
    return newNums[0] * newNums[1];
}
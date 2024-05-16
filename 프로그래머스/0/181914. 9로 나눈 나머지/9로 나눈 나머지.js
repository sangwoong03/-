function solution(numbers) {
    let answer = 0;
    for (const number of numbers) {
        answer += +number
    }
    return answer % 9;
}
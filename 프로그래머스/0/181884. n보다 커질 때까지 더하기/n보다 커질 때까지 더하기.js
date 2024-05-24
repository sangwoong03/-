function solution(numbers, n) {
    let answer = 0;
    for (const num of numbers) {
        if (answer > n) break;
        answer += num;
    }
    return answer;
}
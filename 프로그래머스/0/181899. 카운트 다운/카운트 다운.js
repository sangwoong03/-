function solution(start, end) {
    const answer = [];
    
    for (let i = start; i > end - 1; i--) {
        answer.push(i)
    }
    return answer;
}
function solution(arr) {
    const answer = [];
    for (const elem of arr) {
        for (let i = 1; i <= elem; i++) {
            answer.push(elem)
        }
    }
    return answer;
}
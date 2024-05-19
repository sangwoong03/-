function solution(intStrs, k, s, l) {
    const answer = [];
    for (const str of intStrs) {
        const newStr = str.slice(s, s+l)
        if (newStr > k) {
            answer.push(+newStr)
        }
    }
    return answer;
}
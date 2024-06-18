function solution(i, j, k) {
    let answer = 0;
    
    const kStr = k.toString();
    for (let start = i; i <= j; i++) {
        const iStr = i.toString();
        for (let char of iStr) {
            if (char === kStr) {
                answer++;
            }
        }
    }
    return answer;
}
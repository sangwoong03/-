function solution(q, r, code) {
    let answer = '';
    for (const idx in code) {
        if (idx % q === r) answer += code[idx]
    }
    return answer;
}
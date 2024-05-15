function solution(str, idxList) {
    let answer = ''
    for (const idx of idxList) {
        answer += str[idx]
    }
    return answer;
}
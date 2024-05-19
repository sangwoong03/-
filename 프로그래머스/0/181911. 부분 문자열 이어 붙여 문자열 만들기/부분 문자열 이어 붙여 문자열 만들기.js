function solution(strs, parts) {
    let answer = '';
    for (let i = 0; i < strs.length; i++) {
        const startIdx = parts[i][0];
        const endIdx = parts[i][1] + 1;
        
        answer += strs[i].slice(startIdx, endIdx); 
    }
    return answer;
}
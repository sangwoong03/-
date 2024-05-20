function solution(my_string, indices) {
    let answer = '';
    
    const newIndices = indices.sort();
    for (let i = 0; i < my_string.length; i++) {
        if(!indices.includes(i)) answer += my_string[i];
    }
    return answer;
}
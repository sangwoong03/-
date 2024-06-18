function solution(s) {
    const arr = s.split(' ');
    
    let answer = 0;
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] === 'Z' ?  answer -= arr[i-1] : answer += +arr[i]
    }
    return answer;
}
function solution(n) {
    const answer = [];
    
    let num = n;
    while (num !== 1) {
        if (answer.length === 0) {
            answer.push(num)    
        }
        
        if (num % 2 === 0) {
            num = num / 2;
            answer.push(num);
        } else {
            num = 3 * num + 1;
            answer.push(num);
        }
    }
    
    return answer;
}
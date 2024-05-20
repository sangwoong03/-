function solution(my_string) {
    let answer = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    for (let i = 0; i < alphabet.length; i++) {
        answer.push(0);    
    }
    
    for (const char of my_string) {
        answer[alphabet.indexOf(char)] += 1
    }
    
    return answer;
}
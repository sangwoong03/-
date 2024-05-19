function solution(my_string, m, c) {
    const arr = [];
    
    let newStr = [];
    for (const char of my_string) {
        newStr.push(char)
        if (newStr.length === m) {
            arr.push(newStr)
            newStr = [];
        }
    } 
    
    return arr.map(elem => elem[c-1]).join('');
}
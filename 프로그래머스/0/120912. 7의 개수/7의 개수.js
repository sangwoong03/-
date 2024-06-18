function solution(array) {
    let answer = 0;
    const newArr = array.join('').split('');
    for (const num of newArr) {
        if (num === '7') answer++;
    }
    return answer;
}
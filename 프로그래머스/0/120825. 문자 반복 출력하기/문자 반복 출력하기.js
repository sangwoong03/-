function solution(str, n) {
    return [...str].map(char => char.repeat(n)).join('');
}
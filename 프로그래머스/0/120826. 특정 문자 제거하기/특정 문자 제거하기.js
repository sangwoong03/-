function solution(str, letter) {
    return [...str].filter(char => char != letter).join('');
}
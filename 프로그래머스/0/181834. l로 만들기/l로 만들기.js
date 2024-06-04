function solution(myString) {
    return [...myString].map(char => char < 'l' ? 'l' : char).join('');
}
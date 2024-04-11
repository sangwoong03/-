function solution(l, r) {
    let result = [];
    for (let num = l; num <= r; num++) {
        if (String(num).split('').every(digit => digit === '0' || digit === '5')) {
            result.push(num);
        }
    }
    return result.length > 0 ? result : [-1];
}

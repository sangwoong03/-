/*
* a, b 모두 홀수: a^ + b^
* a 또는 b 홀수 : 2 * (a + b)
* 이외 Math.abs(a - b)
*/

const solution = (a, b) => {
    if (a % 2 !== 0 && b % 2 !== 0) return a ** 2 + b ** 2;
    if (a % 2 !== 0 || b % 2 !== 0) return 2 * (a + b);
    
    return Math.abs(a - b);
}
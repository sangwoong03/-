function solution(n, k) {
    return n >= 10 ? (n * 12000 + k * 2000) - (parseInt(n / 10) * 2000) : n * 12000 + k * 2000;
}
function solution(array, n) {
    let result = 0;
    for (const num of array) {
        if (num === n) {
            result++;
        }
    }
    return result;
}
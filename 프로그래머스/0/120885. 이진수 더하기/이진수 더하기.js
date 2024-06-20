/*
* bin1, bin2를 십진수로 변환하고 두 수를 더함.
* 이후 이진수로 반환
*/

function solution(bin1, bin2) {
    const sum = parseInt(bin1, 2) + parseInt(bin2, 2);
    return sum.toString(2)
}
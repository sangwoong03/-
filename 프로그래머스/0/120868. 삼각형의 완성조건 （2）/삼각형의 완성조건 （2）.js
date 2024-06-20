/*
* 1. sides의 큰 값이 가장 긴 변이 되는 경우
*   - sides의 작은 값에 1을 더한 값부터 큰 값과 같은 값들의 개수를 구한다.
* 2. sides의 두 값이 모두 작은 두 변인 경우
*   - sides의 큰 값에 1을 더한 값부터 두 값을 더한 값에 1을 뺀 
* 결론: 두 차이 + 1 ~ 두 합 - 1까지
*/

const solution = (sides) => {
    const diverse = Math.max(...sides) - Math.min(...sides);
    const sum = sides[0] + sides[1];
    return sum - diverse - 1;
}
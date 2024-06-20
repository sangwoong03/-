/*
* 2부터 n을 나눔
* 나누어 떨어지면 배열에 추가하고, 나눈 결과를 n으로 업데이트합니다.
* 나누어 떨어지지 않으면 다음 수로 넘어갑니다.
* n이 1이 될 때까지 반복
*/

const solution = (n) => {
    const answer = [];
    
    let divisor = 2;
    while (n >= 2) {
        if (n % divisor === 0) {
            answer.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    } 
    
    return Array.from(new Set(answer));
}
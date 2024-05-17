/*
*   1. 주사위 눈이 a, b, c, d 인자로 전달된다.
*   2. a, b, c, d가 모두 같으면 1111 x p점으로 계산한다.
{
  p: 4
}
*   3. 세개의 값 (p)이 같고 하나 (q)가 다르면 (10 × p + q)2 점을 얻습니다.
{
  p: 3,
  q: 1
}
*   4. 두 개씩 같은 값 p, q일 때, (p + q) × |p - q|점을 얻습니다.
{
  p: 2,
  q: 2
}
*   5. 두 숫자가 p로 같고 나머지 두 숫자가 q, r(q ≠ r)이라면 q × r점을 얻습니다.
{
  p: 2,
  q: 1,
  r: 1
}
*   6. 네 숫자가 모두 다르면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
*/

const solution = (a, b, c, d) => {
    const dices = [a, b, c, d];
    
    const diceObj = {};
    for (let i = 0; i < dices.length; i++) {
        const key = dices[i];
        if (diceObj[key]) {
            diceObj[key]++;
        } else {
            diceObj[key] = 1;
        }
    }

    const keyArr = Object.entries(diceObj).sort((a, b) => b[1] - a[1]);
    if (keyArr.length === 1 ) {
        const p = +keyArr[0][0]
        return p * 1111;
    }
    
    if (keyArr.length === 2) {
        const p = +keyArr[0][0];
        const q = +keyArr[1][0];
        
        if (keyArr[0][1] === 2 && keyArr[1][1] === 2) {    
            console.log(p, q, 2222)
            return (p + q) * Math.abs(p - q);
        } else {
            console.log(p, keyArr[0][1], keyArr[1][1], q, 33333)
            return (10 * p + q) ** 2;
        }
    }
    
    if (keyArr.length === 3) {
        const p = +keyArr[0][0];
        const q = +keyArr[1][0];
        const r = +keyArr[2][0];
        return q * r;     
    }
        
    return Math.min(...dices);
}
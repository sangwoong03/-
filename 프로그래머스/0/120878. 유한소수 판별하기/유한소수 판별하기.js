/*
* 1. 분모와 분자의 최대공약수 구함.
* 2. 분자를 최대공약수로 나눠 기약분수를 만듦.
* 3. 기약분수의 분모에서 2와 5를 나눠 떨어질 때까지 계속 나눔.
* 4. 1이면 유한소수 아니면 무한소수 (2)
*/


const 최대공약수 = (분자, 분모) => {
    while (분모 !== 0) {
        let temp = 분모;
        분모 = 분자 % 분모;
        분자 = temp;
    }
    return 분자;
}

const solution = (a, b) => {
    const 최대공약수value = 최대공약수(a, b);
    let result = b / 최대공약수value;
    
    while(result % 2 === 0) {
        result /= 2;    
    }
    
    while(result % 5 === 0) {
        result /= 5;
    }
        
    return result === 1 ? 1 : 2;
}
/*
1. 통분했을 때 분자 구함
2. 통분했을 때 분모 구함
*/

const gcd = (a, b) => {
    return a % b === 0 ? b : gcd(b, a % b)
}

const solution = (denum1, numer1, denum2, numer2) => {
    let 분자 = denum1 * numer2 + denum2 * numer1;
    let 분모 = numer1 * numer2;
    let 최대공약수 = gcd(분자, 분모);
    
    return [분자 / 최대공약수, 분모 / 최대공약수];
}
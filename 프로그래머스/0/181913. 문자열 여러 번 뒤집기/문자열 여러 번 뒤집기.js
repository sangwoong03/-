/*
*   1. query[0]까지 자른 문자열 1개
*   2. query[0] ~ query[1]까지 잘라서 역순으로 재조합한 문자열 1개
*   3. query[1]부터 마지막까지 자른 문자열 1개
*   1 + 2 + 3을 queries 배열 길이만큼 반복
*/ 

function solution(str, queries) {
    let answer = '';
    let newStr = str;
    
    for (const query of queries) {
        const firstStr = newStr.slice(0, query[0]);
        const secondStr = newStr.slice(query[0], query[1]+1);
        const thirdStr = newStr.slice(query[1]+1);
        
        let reversedStr = '';
        for (const char of secondStr) {
            reversedStr = char + reversedStr;
        }

        newStr = firstStr + reversedStr + thirdStr;
    };

    return newStr;
}
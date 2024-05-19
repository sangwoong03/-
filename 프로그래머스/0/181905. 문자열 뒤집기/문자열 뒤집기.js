// 문자열 index 0부터 s까지 자름
// 문자열 index e부터 마지막까지 자름
// 문자열 s부터 e까지 자르고 뒤집음

function solution(str, s, e) {
    const firstStr = str.slice(0, s)
    const reversedStr = [...str.slice(s, e + 1)].reverse().join('')
    const lastStr = str.slice(e + 1)
    console.log(firstStr, reversedStr, lastStr)
    return firstStr + reversedStr + lastStr;
}
/*
* myStr 내 seperator가 없으면 ["EMPTY"] 반환
* myStr 내 seperator가 1개 이상이면, 잘라서 배열에 넣어 반환
*/

function solution(myStr) {
    const seperator = ['a', 'b', 'c']
    
    let newStr = ''
    const answer = []
    for (let i = 0; i < myStr.length; i++) {
        const char = myStr[i]
        if (!seperator.includes(char)) {
            newStr += char
        }
        
        if ((seperator.includes(char) || i === myStr.length - 1) && newStr) {
          answer.push(newStr)
          newStr = ''
        }
    }
    return answer.length > 0 ? answer : ['EMPTY']
}
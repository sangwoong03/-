/*
* bin1, bin2를 십진수로 변환하고 두 수를 더함.
* 이후 이진수로 반환
*/

function solution(bin1, bin2) {
    const sum = parseInt(bin1, 2) + parseInt(bin2, 2);
    return sum.toString(2)
}

/* 실제 이진수를 
function addBinary(bin1, bin2) {
    const result = [];
  
    let len1 = bin1.length;
    let len2 = bin2.length;
    
    // 올림값을 표시할 변수
    let carry = 0;
    
    // 뒤에서부터 각 자릿수 더하기
    for (let i = len1 - 1, j = len2 - 1; i >= 0 || j >= 0; i--, j--) {
        let sum = carry;
        
        if (i >= 0) {
            sum += parseInt(bin1[i]);
        }
        
        if (j >= 0) {
            sum += parseInt(bin2[j]);
        }
        
        // 현재 자릿수의 합 계산
        result.push(sum % 2);
        
        // 다음 자릿수로 넘겨줄 올림 계산
        carry = Math.floor(sum / 2);
    }
    
    // 마지막 남은 올림이 있다면 결과에 추가
    if (carry > 0) {
        result.push(carry);
    }
    
    // 배열을 뒤집어서 이진수 문자열로 변환
    return result.reverse().join('');
}
*/
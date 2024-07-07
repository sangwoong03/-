const solution = (polynomial) => {
    // 공백으로 구분하여 배열 생성
    const terms = polynomial.split(' ').filter(term => term !== '+');
    
    let coefficientSum = 0;
    let constantSum = 0;
    
    // 각 항을 순회하면서 계수와 상수항을 더함
    terms.forEach(term => {
        if (term.includes('x')) {
            const coefficient = term.replace('x', '');
            coefficientSum += coefficient === '' ? 1 : parseInt(coefficient);
        } else {
            constantSum += parseInt(term);
        }
    });

    // 결과 문자열 구성
    let result = [];
    if (coefficientSum !== 0) {
        result.push(coefficientSum === 1 ? 'x' : `${coefficientSum}x`);
    }
    if (constantSum !== 0) {
        result.push(`${constantSum}`);
    }
    
    // 결과 문자열을 ' + '로 결합하여 반환
    return result.join(' + ') || '0';
};

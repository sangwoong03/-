const solution = (polynomial) => {
    const terms = polynomial.split(' ').filter(term => term !== '+');
    
    let sum1 = 0;
    let sum2 = 0;
    
    terms.forEach(term => {
        if (term.includes('x')) {
            const num = term.replace('x', '');
            sum1 += num === '' ? 1 : parseInt(num);
        } else {
            sum2 += parseInt(term);
        }
    });

    let result = [];
    if (sum1 !== 0) {
        result.push(sum1 === 1 ? 'x' : `${sum1}x`);
    }
    if (sum2 !== 0) {
        result.push(`${sum2}`);
    }
    
    return result.join(' + ');
};

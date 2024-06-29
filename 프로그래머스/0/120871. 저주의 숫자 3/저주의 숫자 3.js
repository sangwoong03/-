const solution = (n) => {
    let result = 0;
    let count = 0;
    
    for (let i = 1; count < n; i++) {
        if (i % 3 !== 0 && !i.toString().includes('3')) {
            count++;
            result = i;
        }
    }
    
    return result;
}
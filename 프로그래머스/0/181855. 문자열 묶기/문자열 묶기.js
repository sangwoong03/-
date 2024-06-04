const solution = (arr) => {
    const obj = {}
    
    arr.forEach(element => {
        const length = element.length;
        if (obj[length]) {
            obj[length]++;
        } else {
            obj[length] = 1;
        }
    });
    
    return Math.max(...Object.values(obj));
}
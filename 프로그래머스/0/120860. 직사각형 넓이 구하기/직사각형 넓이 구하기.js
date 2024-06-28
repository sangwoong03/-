const solution = (dots) => {
    const xArr = dots.map(([x, y]) => x);
    const yArr = dots.map(([x, y]) => y);
    

    const xLen = Math.max(...xArr) - Math.min(...xArr);
    const yLen = Math.max(...yArr) - Math.min(...yArr);
    
    return xLen * yLen;
}

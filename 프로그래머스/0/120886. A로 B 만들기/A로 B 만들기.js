const solution = (before, after) => {
    const b = [...before].sort().join('');
    const a = [...after].sort().join('');
    
    return a === b ? 1 : 0;
}
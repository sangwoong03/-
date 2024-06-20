const solution = (spell, dic) => {
    const newStr = spell.sort().join('');
    const newDic = dic.map(elem => elem.split('').sort().join(''))
    
    return newDic.includes(newStr) ? 1: 2;
}
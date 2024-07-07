function solution(array) {
    if (array.length === 1) return array[0];
    
    const obj = {};
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]] === undefined) {
            obj[array[i]] = 1;
        } else {
            obj[array[i]]++;
        }
    }
    
    const newArr = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    if (newArr.length > 1 && newArr[0][1] === newArr[1][1]) {
        return -1;
    }
    
    return parseInt(newArr[0][0]);
}
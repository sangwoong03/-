function solution(strArr) {
    return strArr.map((char, index) => {
        if (index % 2 === 0) return char.toLowerCase();
        else return char.toUpperCase();
    });
}
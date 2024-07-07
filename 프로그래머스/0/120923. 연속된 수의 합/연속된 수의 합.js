/*
n = 3, total = 12
x, x + 1, x + 2 -> 3x + 3 = 12

n = 5, total = 15
x, x + 1, x + 2 ... -> 5x + 10 = 15

x = (total - (num * (num - 1) / 2)) / num
*/

const solution = (num, total) => {
    let x = (total - (num * (num - 1) / 2)) / num;
    
    const result = []
    while( num > 0 ) {
        result.push(x);
        x++;
        num--;
    }
    return result;
}
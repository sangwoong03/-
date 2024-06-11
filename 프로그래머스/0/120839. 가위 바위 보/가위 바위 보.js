/*
* s: 2 -> r: 0 // 2 === 0
* r: 0 -> p: 5 // 0 === 5
* p: 5 -> s: 2 // 5 === 2
*/


const solution = (rsp) => {
    const rspObj = {
        2: 0,
        0: 5,
        5: 2
    }
    return [...rsp].map(elem => rspObj[elem]).join('');
}
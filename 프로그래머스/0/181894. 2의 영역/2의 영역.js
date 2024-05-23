// function solution(arr) { 
//     const index = [];
//     for (const i in arr) {
//         if (arr[i] === 2) index.push(i)
//     }
    
//     if (index.length === 0) return [-1];
//     if (index.length === 1) return [arr[index[0]]];

//     return arr.slice(index[0], +index[index.length - 1] + 1)
// }


const solution = (arr) => {
    const startIdx = arr.indexOf(2);
    const endIdx = arr.lastIndexOf(2);

    return startIdx === -1 ? [-1] : arr.slice(startIdx, endIdx + 1);
}
// function solution(myString) {
//     return [...myString].map(char => {
//         if (char === 'a' || char === 'A') {
//             return char.toUpperCase()
//         } else {
//             return char.toLowerCase()
//         }
//     }).join('');
// }

function solution(myString) {
    return myString.toLowerCase().replace(/a/g, 'A')
}
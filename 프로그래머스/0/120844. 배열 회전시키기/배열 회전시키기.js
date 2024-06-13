// function solution(numbers, direction) {
//     const answer = [];
    
//     if (direction === 'right') {
//         for (let i = 0; i < numbers.length; i++) {
//             if (i === 0) {
//                 answer[i] = numbers[numbers.length - 1];
//             } else {
//                 answer[i] = numbers[i-1];
//             }
//         }
//     } else {
//         for (let i = 0; i < numbers.length; i++) {
//             if (i+1 ===numbers.length){
//                 answer[i] = numbers[0];
//             }
//             else {
//                 answer[i] = numbers[i+1];
//             }
//         }
//     }
//     return answer;
// }

const solution = (numbers, direction) => {
    let answer = [];

    if ("right" == direction) {
        numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }

    answer = numbers;

    return answer;
}
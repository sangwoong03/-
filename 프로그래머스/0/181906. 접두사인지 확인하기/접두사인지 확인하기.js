// function solution(my_string, is_prefix) {
//     const prefix = [];
//     for (let i = 0; i < my_string.length; i++) {
//         prefix.push(my_string.slice(0, i))
//     }
//     return prefix.includes(is_prefix) ? 1 : 0;
// }

const solution = (str, prefix) => {
    return str.startsWith(prefix) ? 1 : 0;
}
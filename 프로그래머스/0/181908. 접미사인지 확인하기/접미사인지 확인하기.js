function solution(my_string, is_suffix) {
    const suffixList = [];
    
    for (let i = 0; i < my_string.length; i++) {
        suffixList.push(my_string.slice(i));
    }
    
    return suffixList.includes(is_suffix) ? 1 : 0;
}
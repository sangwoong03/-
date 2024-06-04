function solution(str_list, ex) {
    return str_list.filter(char => !char.includes(ex)).join('');
}
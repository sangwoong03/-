function solution(num_list) { 
    const evenList = num_list.filter(num => num % 2 === 0);
    const oddList = num_list.filter(num => num % 2 !== 0);
    
    return [evenList.length, oddList.length];
}
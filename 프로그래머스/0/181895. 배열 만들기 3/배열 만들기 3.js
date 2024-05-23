function solution(arr, intervals) {
    const [range1, range2] = intervals;
    
    return [...arr.slice(range1[0], range1[1] + 1), ...arr.slice(range2[0], range2[1] + 1)]
}
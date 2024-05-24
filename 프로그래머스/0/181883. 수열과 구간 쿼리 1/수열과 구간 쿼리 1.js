function solution(arr, queries) {
    for (const query of queries) {
        const [start, end] = query
        for (let i = start; i <= end; i ++) {
            arr[i] += 1
        }
    }
    return arr;
}
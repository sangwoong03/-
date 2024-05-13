function solution(arr) {
    const result = [];
    
    let i = 0;
    while (arr.length > i) {
        if (i < arr.length) {
            if (result.length === 0) {
                result.push(arr[i]);
                i++;
            } else {
                if (result[result.length - 1] < arr[i]) {
                    result.push(arr[i]);
                    i++;
                } else {
                    result.pop()
                }
            }
        }
    }
    
    return result;
}

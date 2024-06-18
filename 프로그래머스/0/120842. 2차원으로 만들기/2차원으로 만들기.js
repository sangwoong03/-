const solution = (numbers, n) => {
    const answer = [];
    let elem = [];
    for (const num of numbers) {
        if (elem.length < n) {
            elem.push(num)
        }
        
        if (elem.length === n) {
            answer.push(elem)
            elem = [];
        }
    }
    return answer;
}
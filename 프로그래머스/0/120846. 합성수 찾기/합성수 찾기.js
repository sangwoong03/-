const countDivisors = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    return count;
}

const solution = (n) => {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        if (countDivisors(i) >= 3) {
            answer++;
        }
    }

    return answer;
}
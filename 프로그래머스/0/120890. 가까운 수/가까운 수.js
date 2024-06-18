const solution = (array, n) => {
    let answer = array[0];
    let min = Math.abs(array[0] - n);

    for (const num of array) {
        const substract = Math.abs(num - n);
        if (substract < min || (substract === min && num < answer)) {
            min = substract;
            answer = num;
        }
    }

    return answer;
};

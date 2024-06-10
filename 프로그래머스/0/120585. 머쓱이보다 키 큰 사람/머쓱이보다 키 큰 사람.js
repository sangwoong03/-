const solution = (array, height) => {
    let result = 0;
    for (const h of array) {
        if (h > height) result ++;
    }
    return result;
}
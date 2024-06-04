const solution = (str) => {
    let lastIndex = 0;
    for (let i = 0; i < str.length; i++) {
        const isTrue = !!+str[i];
        if (isTrue) {
            return str.slice(lastIndex)
        } else {
            lastIndex++
        }
    }
}
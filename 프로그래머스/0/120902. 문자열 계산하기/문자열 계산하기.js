const solution = (my_string) => {
    const tokens = my_string.split(' ');
    
    let result = +tokens[0];
    for (let i = 1; i < tokens.length; i += 2) {
        const operators = tokens[i];
        const nextNumber = +tokens[i + 1];
        
        if (operators === '+') result += nextNumber;
        if (operators === '-') result -= nextNumber;
    }
    return result;
}
const solution = (my_string) => {
    const numbers = my_string.match(/\d+/g);

    if (!numbers) return 0;
    

    const sum = numbers.reduce((sum, num) => sum + +num, 0);
    return sum;
}
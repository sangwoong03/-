const solution = (my_string) => {
    return [...my_string].map(char => /^[a-z]+$/.test(char) ? char.toUpperCase() : char.toLowerCase()).join('');
}
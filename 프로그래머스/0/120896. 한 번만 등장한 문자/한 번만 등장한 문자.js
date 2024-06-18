function solution(s) {
    const charCount = {};

    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    const uniqueChars = [];
    for (const char in charCount) {
        if (charCount[char] === 1) {
            uniqueChars.push(char);
        }
    }

    return uniqueChars.sort().join('');
}

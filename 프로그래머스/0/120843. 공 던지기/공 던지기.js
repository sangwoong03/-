const solution = (numbers, k) => {
    let currentIndex = 0;
    for (let i = 0; i < k - 1; i++) {
        currentIndex = (currentIndex + 2) % numbers.length;
    }
    
    return numbers[currentIndex];
}
function solution(score) {
    const averages = score.map(([x, y]) => (x + y) / 2);
    const ranks = [...averages].sort((a, b) => b - a)
    
    return averages.map(average => ranks.indexOf(average) + 1);
}
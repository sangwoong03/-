function solution(sides) {
    const newSides = sides.sort((a, b) => b-a);
    return newSides[0] - newSides[1] >= newSides[2] ? 2 : 1;
}
const solution = (array) => {
    const middleIdx = (array.length) / 2;
    return array.sort((a, b) => a - b)[Math.floor(middleIdx)];
}
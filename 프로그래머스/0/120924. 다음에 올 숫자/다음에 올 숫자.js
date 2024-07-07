const solution = (common) => {
    const d1 = common[1] - common[0];
    const d2 = common[2] - common[1];
    const r = common[1] / common[0];
    return d1 === d2 ? common[common.length - 1] + d1 : common[common.length - 1] * r;
}
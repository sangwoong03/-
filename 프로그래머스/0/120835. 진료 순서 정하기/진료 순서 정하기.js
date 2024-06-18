const solution = (emergency) => {
    const sorted = [...emergency].sort((a, b) => b - a);

    return emergency.map(patient => sorted.indexOf(patient) + 1);
}
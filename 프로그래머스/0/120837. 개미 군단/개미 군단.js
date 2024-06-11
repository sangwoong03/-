const solution = (hp) => {
    const generals = Math.floor(hp / 5);
    hp %= 5;
    
    const soldiers = Math.floor(hp / 3);
    hp %= 3;
    
    const ergates = hp;

    return generals + soldiers + ergates;
}
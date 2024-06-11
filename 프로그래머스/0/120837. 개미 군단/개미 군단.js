const solution = (hp) => {
    const general = Math.floor(hp / 5);
    const _general = hp % 5;
    
    const soldier = _general > 0 ? Math.floor(_general / 3) : 0;
    const _soldier = _general % 3;
  
    const ergate = (_soldier > 0) ? Math.floor(_soldier / 1) : 0;
  
    return general + soldier + ergate;
}
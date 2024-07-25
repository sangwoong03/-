const solution = (lines) => {
  let result = 0;
  const newLines = new Array(200).fill(0);
  
  for (let i = 0 ; i < lines.length; i++) {
    const start = lines[i][0];
    const end = lines[i][1];
    
    for (let j = start; j < end; j++) {
      newLines[j + 100] += 1;
    }
  }

  for (const line of newLines) {
    if (line > 1) {
      result++;
    }
  }
  return result;
}
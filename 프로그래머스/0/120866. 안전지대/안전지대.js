const solution = (board) => {

  const rows = board.length;
  const cols = board[0].length;
  const directions = [
      [-1, -1], [0, -1], [1, -1],
      [-1, 0], [0,0], [1, 0],
      [-1, 1], [0, 1], [1, 1],
  ];
  
  let dmz = Array.from({ length: rows }, () => Array(cols).fill(0));
  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (board[r][c] === 1) {
            dmz[r][c] = 1;
            for (const [dr, dc] of directions) {
              const newDr = r + dr;
              const newDc = c + dc;
 
              if (newDr < 0 || newDc < 0 || newDr >= rows || newDc >= cols) continue;
      
              if (dmz[newDr][newDc] === 0) dmz[newDr][newDc]++;
            }
          }
      }
  }
  

  return dmz.flat().filter(mine => !mine).length
}
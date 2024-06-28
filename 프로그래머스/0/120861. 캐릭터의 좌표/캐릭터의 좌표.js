function solution(keyinput, board) {
    const direction = {
        right: [1, 0],
        left: [-1, 0],
        up: [0, 1],
        down: [0, -1]
    };
    
    const xLimit = Math.floor(board[0] / 2);
    const yLimit = Math.floor(board[1] / 2);
    
    let coordination = [0, 0];
    
    for (const key of keyinput) {
        const [dX, dY] = direction[key];
        const newX = coordination[0] + dX;
        const newY = coordination[1] + dY;
        
        if (Math.abs(newX) <= xLimit) coordination[0] = newX;
        if (Math.abs(newY) <= yLimit) coordination[1] = newY;
        
    }
    
    return coordination;
}
const solution = (n) => {
    // 빈 n x n 배열 생성
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    
    // 방향 배열: 오른쪽, 아래, 왼쪽, 위
    const directions = [
        [0, 1],  // 오른쪽
        [1, 0],  // 아래
        [0, -1], // 왼쪽
        [-1, 0]  // 위
    ];
    
    let row = 0, col = 0, dirIndex = 0;
    for (let num = 1; num <= n * n; num++) {
        result[row][col] = num;
        
        // 다음 위치 계산
        const nextRow = row + directions[dirIndex][0];
        const nextCol = col + directions[dirIndex][1];
        
        // 범위를 벗어나거나 이미 숫자가 채워진 경우 방향 변경
        if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n || result[nextRow][nextCol] !== 0) {
            dirIndex = (dirIndex + 1) % 4; // 방향을 시계방향으로 변경
        }
        
        // 새로운 방향으로 위치 업데이트
        row += directions[dirIndex][0];
        col += directions[dirIndex][1];
    }
    
    return result;
};
function solution(keyinput, board) {
    // 초기 좌표를 [0, 0]으로 설정
    let position = [0, 0];
    
    // board의 크기를 이용하여 이동할 수 있는 최대 범위 계산
    const xLimit = Math.floor(board[0] / 2);
    const yLimit = Math.floor(board[1] / 2);
    
    // 방향키 입력을 처리
    for (let key of keyinput) {
        switch (key) {
            case 'up':
                if (position[1] < yLimit) {
                    position[1] += 1;
                }
                break;
            case 'down':
                if (position[1] > -yLimit) {
                    position[1] -= 1;
                }
                break;
            case 'left':
                if (position[0] > -xLimit) {
                    position[0] -= 1;
                }
                break;
            case 'right':
                if (position[0] < xLimit) {
                    position[0] += 1;
                }
                break;
        }
    }
    
    return position;
}

const solution = (picture, k) => {
    const enlargedPicture = [];

    for (let row of picture) {
        // 각 문자를 k배 늘려서 새로운 행을 생성
        let enlargedRow = '';
        for (let char of row) {
            enlargedRow += char.repeat(k);
        }
        
        // 생성된 행을 k번 추가하여 세로로도 k배 늘림
        for (let i = 0; i < k; i++) {
            enlargedPicture.push(enlargedRow);
        }
    }

    return enlargedPicture;
};
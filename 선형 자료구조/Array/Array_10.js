// 10. 달팽이 만들기
// 정사각형 모양의 달팽이 2차원 배열을 그려주는 함수를 작성하시오
// 입력한 크기의 정사각형으로 아래 그림처럼 시계 방향으로 돌면서 숫자를 채워 2차원 배열을 반환한다.
// 1    2    3    4
// 12   13   14   5
// 11   16   15   6
// 10   9    8    7

function answer(n) {
	let result = [];

	for (let i = 0; i < n; i++) {
		result[i] = [];
	}

	let direction = 1;
	let x, y, num;
	x = y = num = 0;
	x--;

	while (1) {
		for (let i = 0; i < n; i++) {
			x += direction;
			result[y][x] = ++num;
		}

		n--;

		if (n <= 0) break;

		for (let j = 0; j < n; j++) {
			y += direction;
			result[y][x] = ++num;
		}

		direction *= -1;
	}

	return result;
}

let input = [3, 5, 6];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1}`);
	console.log(answer(input[i]));
}

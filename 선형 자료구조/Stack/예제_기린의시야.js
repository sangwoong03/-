// 기린의 시야
// 기린이 앞쪽만 볼 수 있는 경우, 다른 기린을 몇마리 볼 수 있는지 총합을 구하는 프로그램을 작성하시오.
// 기린은 자신보다 작거나 같은 기린만 볼 수 있으며 자신보다 큰 기린이 나올 경우 앞 기린들이 가려져 볼 수가 없다.
// 입력은 기린 별 키 값이 들어오며, 다른 기린을 볼 수 있는 총합을 구해 반환한다.
// 예를 들어 5 2 4 2 6 1 순의 기린 키가 입력으로 들어오면
// 1번 기린은 2, 3, 4 기린을 볼 수 있어 3마리
// 2, 4, 마지막 기린은 볼 수 없음
// 3번은 1마리
// 5번은 1마리
// 총 5마리 기린이다.

// 배열의 마지막 값을 확인하기 위한 메서드
if (!Array.prototype.peek) {
	Array.prototype.peek = function () {
		return this[this.length - 1];
	};
}

// 비어있는지 여부를 확인하는 메서드
if (!Array.prototype.isEmpty) {
	Array.prototype.isEmpty = function () {
		return this.length === 0;
	};
}

function answer(giraffe) {
	let result = 0;

	let stack = [];

	// 안전한 최대 정수값 나타냄
	giraffe.push(Number.MAX_SAFE_INTEGER);

	for (let i = 0; i < giraffe.length; i++) {
		// stack이 비어있고, stack의 height 값이 giraffe[i]보다 커질 때까지 루프 반복
		while (!stack.isEmpty() && stack.peek()["height"] < giraffe[i]) {
			result += i - stack.pop()["index"] - 1;
			// console 출력을 통해 result값 변화 확인
			// console.log(result);
		}
		stack.push({ height: giraffe[i], index: i });
		console.log(stack);
	}

	return result;
}

let input = [
	[10, 3, 7, 4, 12, 2],
	[7, 4, 12, 1, 13, 11, 12, 6],
	[20, 1, 19, 18, 15, 4, 6, 8, 3, 3],
];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i]));
}

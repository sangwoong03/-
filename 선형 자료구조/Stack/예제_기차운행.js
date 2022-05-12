// 기차 운행
// 열차가 1번부터 3번까지 순서대로 들어온다고 했을 때,
// 입력 순서대로 나갈 수 있는지 없는지 판단하는 프로그램을 작성하시오.
// 입력은 차량 순서가 적혀있는 배열이며, 가능 여부에 따라 true / false를 반환한다.

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

function answer(train) {
	let stack = [];
	let num = 0;

	for (let i = 0; i < train.length; i++) {
		while (stack.isEmpty() || stack.peek() < train[i]) {
			// 비어있는 스택이거나 스택의 마지막 값이 입력 배열 train[i]보다 작을 경우
			stack.push(++num);
		}
		if (stack.peek() === train[i]) {
			// 스택의 마지막 값이 입력 배열 train[i]와 같은 경우
			stack.pop();
			// stack의 마지막 값 출력
		} else {
			return false;
		}
	}

	return true;
}

let input = [
	[1, 2, 3],
	[3, 2, 1],
	[3, 1, 2],
];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i]));
}

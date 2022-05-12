// 괄호 짝 찾기
// 계산 수식이 주어졌을 때, 같은 짝의 괄호 위치를 찾는 프로그램을 제작하시오.
// 입력은 계산 수식으로 주어지며, 괄호의 짝 별 위치를 [시작, 끝]으로 찾아 2차원 배열 형태로 반환한다.
// 위치 시작 값은 0으로 시작하며, 하나라도 짝이 맞지 않을 경우 빈 배열을 반환한다.

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

function answer(str) {
	let result = [];
	let stack = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "(") {
			stack.push(i);
		} else if (str[i] === ")") {
			if (stack.isEmpty()) {
				return [];
			}
			result.push([stack.pop(), i]);
		}
	}

	if (!stack.isEmpty()) {
		return [];
	}

	return result;
}

let input = [
	"(a+b)",
	"(a*(b+c)+d)",
	"(a*(b+c)+d+(e)",
	"(a*(b+c)+d)+e)",
	"(a*(b+c)+d)+(e*(f+g))",
];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i]));
}

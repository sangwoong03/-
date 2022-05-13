// 접시 꺼내기
// 접시가 a, b, c, d 순으로 한쪽이 막혀 있는 세척기에 들어간다.
// b a c d 순으로 꺼내기 위해서는
// push push pop pop push pop push pop  순으로 꺼내면 된다
// 세척기에 꺼내야 하는 접시의 순서가 주어질 때 push/pop으로 접시가 꺼내져야 하는 동작을 계산하는 프로그램을 작성하시오.
// 입력은 접시의 수가 10개를 넘기지 않는 소문자 알파벳으로 주어진다.
// push/pop 연산 동작은 push → 0, pop → 1로 변환하여 배열로 반환한다. (단, 주어진 순서로 못 꺼낼 경우 빈 배열로 반환한다.)

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
	let dish = str.split("").sort().join("");
	let dish_index = 0;

	for (let i = 0; i < str.length; i++) {
		while (stack.isEmpty() || stack.peek() < str[i]) {
			stack.push(dish[dish_index++]);
			// push 연산에 대한 결과를 반환
			result.push(0);
		}

		if (stack.isEmpty() || stack.peek() > str[i]) {
			return [];
		} else {
			stack.pop();
			// pop 연산에 대한 결과를 반환
			result.push(1);
		}
	}

	return result;
}

let input = ["bacd", "dabc", "edcfgbijha"];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i]));
}

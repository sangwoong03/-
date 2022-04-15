// 7. OX 문제
// 정답을 맞혔을 경우 문제당 1점을, 연속으로 맞힐 경우 연속한 정답 개수만큼의 가산점 부여
// 점수 산출 프로그램 작성하자
// 배열 형태의 채점 값이 1(정답), 0(오답)으로 입력되며, 점수의 한계를 반환한다.

function answer(nums) {
	let result = 0;
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] == 1) {
			result += ++sum;
		} else {
			sum = 0;
		}
	}
	return result;
}

let input = [
	[1, 0, 1, 1, 1, 0, 1, 1, 0, 0],
	[1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i]));
}

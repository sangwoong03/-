// 3. 일곱 난장이
// 일터에 나갔던 난장이 9명이 와서는 모두 자기가 일곱 난장이 중 하나라고 우기고 있다.
// 모든 난장이의 가슴에는 숫자가 표시된 뱃지가 있는데, 일곱 난장이의 배지에 표시된 숫자의 합은 100이다.
// 일곱 난장이를 분별하는 프로그램을 작성하시오.
// 배지 값은 100이하 자연수로 들어오며, 일곱 난장이의 배지 값을 기존 순서대로 넣어 반환한다.

function answer(nums) {
	let result = [];

	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
	}
	sum -= 100;

	let faker = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (sum == nums[i] + nums[j]) {
				faker[0] = i;
				faker[1] = j;
				break;
			}
		}
		if (faker.length !== 0) break;
	}

	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		if (faker[0] !== i && faker[1] !== 1) {
			result[count++] = nums[i];
		}
	}

	return result;
}

let input = [
	[1, 5, 6, 7, 10, 12, 19, 29, 33],
	[25, 23, 11, 2, 18, 3, 28, 6, 37],
	[3, 37, 5, 36, 6, 22, 19, 2, 28],
];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i]));
}

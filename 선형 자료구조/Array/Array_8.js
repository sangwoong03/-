// 8. 벽돌 옮기기
// 벽돌의 높이를 맞추는 프로그램을 제작하시오
// 입력은 배열 형태의 정수이며, 같은 높이를 맞추기 위해 옮겨야 하는 벽돌 개수를 반환한다
// 입력으로 들어오는 배열은 남는 벽돌 없이 높이가 딱 나눠 떨어지도록 들어온다.

function answer(nums) {
	let result = 0;

	const avg = nums.reduce((acc, crr) => acc + crr, 0) / nums.length;
	// 다른 평균 산출 방법
	// let avg = 0;
	// for ( let i = 0 ; i < nums.length; i++) {
	//   avg += nums[i];
	// }
	// avg / nums.length;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > avg) {
			result += nums[i] - avg;
		}
	}
	return result;
}

let input = [
	[5, 2, 4, 1, 7, 5],
	[12, 8, 10, 11, 9, 5, 8],
	[27, 14, 19, 11, 26, 25, 23, 15],
];

for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i])}`);
}

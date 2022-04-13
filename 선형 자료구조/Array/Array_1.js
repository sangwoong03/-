//  1. 수열 최솟값 위치
//  수열이 주어질 때 ,이 수열의 있는 수 중 최소값의 위치를 모두 출력하는 프로그램 작성
// 입력은 자연수로 된 배열을 받고, 시작 위치는 0으로 계산하여 최소값의 위치를 배열로 반환한다.
// 모든 수는 100 이하의 자연수로 입력 받는다.

function answer(nums) {
	let result = [];

	// 최솟값 구하기
	let min = 100;
	for (let i = 0; i < nums.length; i++) {
		if (min > nums[i]) {
			min = nums[i];
		}
	}
	console.log(min); // 최솟값 결과

	// 최솟값 인덱스 구하기
	for (let i = 0; i < nums.length; i++) {
		if (min == nums[i]) {
			result.push(i);
		}
	}

	// 다른 풀이
	// let count = 0;
	// for (let i = 0 ; i < nums.length ; i++) {
	//   if (min == nums[i]) {
	//     result[count++] = i
	//   }
	// }

	return result;
}

let input = [
	[5, 2, 10, 2],
	[4, 5, 7, 4, 8],
	[12, 11, 11, 16, 11, 12],
];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i]));
}

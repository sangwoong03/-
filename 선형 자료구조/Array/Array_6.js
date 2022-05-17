// 6. TWO SOME
// 배열과 정수 값이 주어질 때, 배열 내 두 값을 합하여 정수 값을 만들 수 있도록 두개의 index를 반환
// 각 입력에 정확히 하나의 솔루션이 있다고 가정하고 동일한 요소를 두번 사용하지 않는다.
// 배열의 index는 오름차순으로 정렬하여 반환한다.

function answer(nums, target) {
	let result = [];

	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] == target) {
				result.push(i, j);
			}
		}
	}
	return result;

	// 다른 풀이
	// target-nums[i] = nums[j]

	// let map = {};
	// for (let i = 0; i < nums.length; i++) {
	// 	if (map[target - nums[i]] != undefined) {
	// 		return [map[target - nums[i]], i];
	// 	}

	// 	map[nums[i]] = i;
	// }

	// return [];
}

let input = [
	[[7, 2, 11, 15], 9],
	[[3, 2, 4], 6],
	[[3, 3], 6],
	[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19],
];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1}`);
	console.log(answer(input[i][0], input[i][1]));
}

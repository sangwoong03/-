// Question
// 입력된 값을 통해 등차수열의 몇번째 항인지 구하는 프로그램 작성
// 입력은 초항 a, 인접한 차이 d, 찾는 항의 수 n이 주어지며 n값에 해당하는 항 번호를 반환
// 만약 항 번호가 없을 시에는 -1를 반환.
// a = 1, d = 2, n = 7을 입력 받았을 때, f(1)=1, f(2)=3, f(3)=5, f(4)=7이므로 4를 반환하는 프로그램 작성.

//==========================================================================//
// //Solution #1

function solution(a, d, n) {
	let index = -1;
	let num;

	for (let i = 1; ; i++) {
		num = a + (i - 1) * d;

		if (num > n) {
			index = -1;
			break;
		}
		if (num === n) {
			index = i;
			break;
		}
	}
	return index;
}

//=========================================================================//
//Solution #2
function solution(a, d, n) {
	let index = -1;

	//
	if ((n - a) % d === 0) {
		index = (n - a) / d + 1;
	}

	return index;
}

// Main
let input = [
	[1, 2, 7],
	[2, 3, 10],
	[3, 5, 23],
];

for (let i = 0; i < input.length; i++) {
	console.log(
		`answer: ${i + 1} : ${solution(input[i][0], input[i][1], input[i][2])}`,
	);
}

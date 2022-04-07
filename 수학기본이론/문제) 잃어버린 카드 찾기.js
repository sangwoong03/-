// Question
// 등차수열을 이루는 4개의 숫자카드 중 한 카드를 잃어버렸다.
// 입력은 자연수로 된 3개의 숫자 카드를 받고 한가지의 잃어버린 카드의 수를 반환한다.
// 잃어버린 카드는 가운데 숫자 카드로 한정한다.
// 1, 7, 10을 입력 받았을 때, 초항이 1, 공차가 3인 등차수열 1, 4, 7, 10을 찾아 4를 반환하는 문제...

//======================================================================================//
// solution #1
// 잃어버린 숫자 카드가 가운데인 것이 명시되었을 때 풀이가 가능할듯..
function answer(a, b, c) {
	let number = 0;

	num = [a, b, c];
	num.sort((x, y) => x - y); // 오름차순 정렬

	// 등차수열 중 빠진 값이 가운데 값일 때,
	// 입력받은 두 수의 차이 중 하나는 공차임을 활용.
	if (c - b < b - a) {
		number = a + (c - b);
	} else {
		number = b + (b - a);
	}

	return number;
}

//======================================================================================//
// solution #1

function abcdef(a, b, c) {
	let number = 0;

	num = [a, b, c];
	num.sort((x, y) => x - y);

	// 공차 찾기 >> 이웃한 두 수의 차를 더한 값을 입력받은 숫자의 개수로 나누기.

	let d = 0;
	// 공차의 값을 모르니 0에서 출발
	for (let i = 0; i < num.length; i++) {
		d += num[i] - num[i - 1];
	}
	d /= num.length;

	// 잃어버린 수의 index = n-1 찾기
	let index = num[2] - num[1] > num[1] - num[2] ? 2 : 1;

	// 값 찾기 == 이전 값 + (n-1) d
	number = num[0] + d * index;

	return number;
}

// Main
let input = [
	[1, 7, 10],
	[3, 8, 18],
	[2, 5, 11],
];

for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}

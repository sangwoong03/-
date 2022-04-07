//==========================================================================//
// //Solution #1

// function solution(a, d, n) {
// 	let index = -1;
// 	let num;

// 	for (let i = 1; ; i++) {
// 		num = a + (i - 1) * d;

// 		if (num > n) {
// 			index = -1;
// 			break;
// 		}
// 		if (num === n) {
// 			index = i;
// 			break;
// 		}
// 	}
// 	return index;
// }

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

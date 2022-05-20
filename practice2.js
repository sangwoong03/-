// 코드업 문제
// 링크:  https://codeup.kr/problem.php?id=1440

function answer(arr) {
	let result = "";

	for (let i = 0; i < arr.length; i++) {
		result += `${i + 1}: `;
		for (let j = 0; j < arr.length; j++) {
			if (i !== j && arr[i] < arr[j]) {
				result += "< ";
			} else if (i !== j && arr[i] > arr[j]) {
				result += "> ";
			} else if (i !== j && arr[i] == arr[j]) {
				result += "= ";
			}
		}
		result += "\n";
	}

	return result;
}

let input = [
	[1, 2, 3, 2, 1],
	[3, 3, 5, 10, 1, 2, 0, 3],
	[10, 5, 11, 15, 3, 10, 9, 12, 8, 10, 2],
];

for (let i = 0; i < input.length; i++) {
	console.log(answer(input[i], input[i].length));
}

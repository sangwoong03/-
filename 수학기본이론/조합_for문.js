let input = [1, 2, 3, 4]; // 4C2
let count = 0;

function combination(arr) {
	for (let i = 0; i < arr.length; i++) {
		// i = 3일 때 v = 4, j = 4이므로 아래 for문이 실행이 되지 않음.
		for (let j = i + 1; j < arr.length; j++) {
			count++;
			console.log(arr[i]);
		}
	}
}

combination(input);
console.log(count);

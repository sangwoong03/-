let input = [1, 2, 3, 4];
let output = [];
let count = 0;

function combination(arr, data, s, idx, r) {
	if (s === r) {
		count++;
		console.log(data);
		return;
	}

	for (let i = idx; arr.length - i >= r - s; i++) {
		console.log("index: " + idx);
		data[s] = arr[i];
		combination(arr, data, s + 1, i + 1, r);
		// idx = 1, i = 0, s = 0 >> data[0] = arr[0] = 1 >> 재귀함수 호출
		// idx = 1, i = 1, s = 1 >> data[1] = arr[1] = 2
		// idx = 1, i = 2, s = 2 = r ... return [1, 2]

		// (i++) idx = 1, i = 2, s = 1 >> data[1] = arr[2] = 3 >> 재귀함수 호출
		// idx = 3, i = 3, s = 2 = r ... return [1, 3]

		// (i++) idx = 1, i = 3, s = 1 >> data[1] = arr[3] = 4 >> for문 종료 / 재귀함수 호출
		// idx = 4, i = 4, s = 2 = r ... return [1, 4]
		// ...

		console.log("i: " + i);
	}
}

combination(input, output, 0, 0, 2);
console.log(count);

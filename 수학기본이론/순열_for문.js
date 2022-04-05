// 순열 문제는 for문이나 재귀문으로 문제를 풀 수 있음.
// a, b, c를 순서에 맞게 중복없이 출력하라.
// for문으로 푸는 경우, 원소의 개수만큼 for문이 늘어난다.

let input = ["a", "b", "c"];
let count = 0;

function permutation(arr) {
	// for i => 첫번째 index 위치시킬 요소 a, b, c [i, 0, 0]
	for (let i = 0; i < arr.length; i++) {
		// for j => 두번째 index 위치시킬 요소 a, b, c [i, j, 0]
		for (let j = 0; j < arr.length; j++) {
			if (i === j) continue;
			// for k => 세번째 index 위치시킬 요소 a, b, c [i, j, k]

			for (let k = 0; k < arr.length; k++) {
				if (i === k) continue;
				if (j === k) continue;

				console.log(arr[i], arr[j], arr[k]);
				count++; // 후위증가: 연산 수행 이후 count값을 증가시킴.
			}
		}
	}
}

permutation(input);
console.log(count);

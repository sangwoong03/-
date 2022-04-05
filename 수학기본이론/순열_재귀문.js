//재귀문을 통한 풀이

let input = ["a", "b", "c"];
let count = 0;

// s(시작할 위치), r(개수)
function permutation(arr, s, r) {
	// 재귀함수를 반복하면서 변경되어야하는 메인로직
	for (let i = s; i < arr.length; i++) {
		// i=s => s의 값을 변경시키면서 중복 제거
		[arr[s], arr[i]] = [arr[i], arr[s]]; // swarp... 해당 index의 값만 바뀌고, 배열의 나머지 값들은 그대로 출력.
		permutation(arr, s + 1, r);
		[arr[s], arr[i]] = [arr[i], arr[s]]; // replace
		/*
    s = 0, i = 0, r = 2 ["a", ]
    s = 1, i = 0, r = 2 ["a"]
    s = 1, i = 1, r = 2 ["a", "b"]
    s = 2, i = 1, r = 2 ["a", "b", "c"] ... return
    s = 1, i = 2, r = 2 ["a", "c", "b"]
    ...
    */
	}
	// 재귀함수를 멈추어야 할 조건
	if (s === r) {
		count++;
		console.log(arr);
		return; // 함수 실행 종료 후 주어진 값을 호출 지점으로 반환함.
	}
}

permutation(input, 0, 2);
console.log(count);

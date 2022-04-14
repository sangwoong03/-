// 5. 나무 그리기
// 나무를 그리는 프로그램을 만들자.
// 자연수를 높이로 입력받고 대칭형 나무 문자열을 만들어 반환한다.
// 각 행 별로 개행 문자(\n)를 넣어주면서 "*"을 출력하며 출력 값 형태로 나무를 그려준다.

function answer(height) {
	let str = "\n";

	for (let i = 0; i < height; i++) {
		// 공백 처리
		for (let j = 0; j < height - i - 1; j++) {
			str += " ";
		}
		// 문자 처리
		for (let j = 0; j < i * 2 - 1; j++) {
			str += "*";
		}
		// 개행 문자추가
		str += "\n";
	}
	return str;
}

let input = [3, 5, 7];

for (let i = 0; i < input.length; i++) {
	console.log(`#${i + 1} ${answer(input[i])}`);
}

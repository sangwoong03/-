// 대표 선출
// 대표를 선출하는 프로그램을 작성하시오.
// 규칙은 원탁에 둘러 앉아 시계 방향으로 1번부터 n번까지 번호를 부여한다.
// 그리고 주사위를 굴려 나온 숫자 m의 사람을 제외하고, 그 다음으로 나온 주사위 숫자 k만큼 이동해 후보에서 제외한다.
// 이렇게 순회하며 1명이 남을 때까지 반복해 마을의 대표를 선출하기로 했다.
// n, m, k가 주어졌을 때 대표 후보에서 제외되는 번호를 출력해주는 프로그램을 작성하시오.
// 입력은 n, m, k 자연수가 주어지며 대표후보에서 제외되는 번호를 순차적으로 배열로 반환한다.

function Node(data) {
	this.data = data;
	this.next = null;
}

function LinkedList() {
	this.head = null;
}

function answer(n, m, k) {
	let result = [];

	// ==================================== 원형연결리스트 만들기
	let ll = new LinkedList();
	let current, prev;

	for (let i = 1; i <= n; i++) {
		current = new Node(i); // 1부터 n까지 Node형성

		if (i === 1) {
			// 원형연결리스트이기 때문에 i = 1일 때 연결리시트의 head부분이 됨.
			ll.head = current;
		} else {
			// i가 1이 아니면 이전 값의 next가 2~n까지 Node로 연결됨.
			prev.next = current;
		}
		// 다시 현재 값을 prev에 대입하면서 다음 루프로 들어오는 Node의 prev값에 본인(currnet)을 연결
		prev = current;
	}
	// n까지의 반복 루프가 종료되었을 때 Node(n)을 head로 연결하여 원형리스트 만ㄷ를기.
	current.next = ll.head;

	// ==================================== 시작 위치 설정
	current = ll.head; // Node(1)을 가리킴
	// m이 0이 될 때까지 반복, 최소 1번의 루프 순회를 위한 m의 최솟값은 2이므로 --m값 대입 ( while (0 === false ))
	while (--m) {
		prev = current;
		current = current.next;
	}

	// ==================================== 후보자 중 k만큼 움직이면서 제거
	let count;
	while (current.next != current) {
		// current의 다음 값이 current인 경우 current 하나만 남았을 경우임.
		result.push(current.data);
		prev.next = current.next;

		count = k;
		while (count--) {
			// count = k부터 시작하면서 1씩 감소
			prev = current;
			current = current.next;
		}
	}

	// ====================================  혼자 남은 값 = 대표
	result.push(current.data);

	return result;
}

let input = [
	[8, 2, 3],
	[10, 2, 3],
	[20, 5, 7],
];

for (let i = 0; i < input.length; i++) {
	process.stdout.write(`#${i + 1} `);
	console.log(answer(input[i][0], input[i][1], input[i][2]));
}

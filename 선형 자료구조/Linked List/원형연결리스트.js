function Node(data) {
	this.data = data;
	this.next = null;
}

function CircularLinkedList() {
	this.head = null;
	this.length = 0;
}

CircularLinkedList.prototype.size = function () {
	return this.length;
};
CircularLinkedList.prototype.isEmpty = function () {
	return this.length === 0;
};
CircularLinkedList.prototype.printNode = function () {
	process.stdout.write("head -> ");

	if (this.length != 0) {
		process.stdout.write(`${this.head.data} -> `); // node의 값이 없는 경우 무한 루프 도는 것을 방지
		for (let node = this.head.next; node != this.head; node = node.next) {
			process.stdout.write(`${node.data} -> `);
		}
	}

	console.log("null");
};
CircularLinkedList.prototype.append = function (value) {
	let node = new Node(value),
		current = this.head;

	if (this.head === null) {
		this.head = node;
	} else {
		while (current.next != this.head) {
			// 노드의 다음 값이 head를 가리킬 때까지 순회
			current = current.next;
		}
		current.next = node;
	}
	node.next = this.head; // 노드의 끝부분이 null이 아니라 head로 업데이트

	this.length++;
};
CircularLinkedList.prototype.insert = function (value, position = 0) {
	if (position < 0 || position > this.length) {
		// 범위 설정
		return false;
	}

	let node = new Node(value),
		index = 0,
		current = this.head,
		prev;

	if (position === 0) {
		// 첫번째 위치에 값 넣기
		node.next = current; // 들어간 첫번째 값의 다음 값은 다시 head로 초기화

		if (this.isEmpty()) {
			// Node 객체가 비었을 경우
			current = node;
		} else {
			// Node 객체에 값이 있을 경우
			while (current.next != this.head) {
				// this.head를 만나는 경우 마지막 부분이니 그 이전 지점까지
				current = current.next;
			}
		}

		this.head = node; // head에 새로운 node 값 설정
		current.next = this.head; // 새로운 node 값 다음 값으로 head 설정
	} else {
		while (index++ < position) {
			// position 값 이전까지 index를 늘려가면서 한칸씩 뒤로 당기기
			prev = current; // 이전 값은 현재 값으로 변경
			current = current.next; // 현재 값은 현재의 다음 값으로 변경
		}

		node.next = current;
		prev.next = node;

		if (node.next === null) {
			node.next = this.head;
		}
	}

	this.length++;
	return true;
};
CircularLinkedList.prototype.remove = function (value) {
	let current = this.head,
		prev = current,
		data;

	while (current.data != value && current.next != this.head) {
		// Node의 데이터 중 value와 일치하는 값이 있을 때까지 순회
		prev = current;
		current = current.next;
	}

	if (current.data != value) {
		return null;
	}

	data = current.data; // 현재 node에 대한 데이터를 data변수에 임시저장
	if (current === this.head) {
		// 현재의 값이 head일 때 >> 첫번째 값을 가리킬 때
		// 첫번째 위치인 경우
		while (current.next != this.head) {
			// head로 돌아오기 전 마지막 node를 찾는 과정
			this.head = current.next;
		}

		this.haed = this.head.next;
		current.next = this.head;
	} else {
		prev.next = current.next;
	}

	this.length--;

	return data;
};
CircularLinkedList.prototype.removeAt = function (position = 0) {
	if (position < 0 || position >= this.length) {
		return null;
	}

	let current = this.head,
		index = 0,
		prev,
		data;

	if (position === 0) {
		data = current.data;

		while (current.next != this.head) {
			current = current.next;
		}

		this.head = current.next; // head의 값을 다음 값으로 넘겨줌 (index가 1인 node로)
		current.next = this.head; // current의 next 값으로 index가 1인 node가 옴.
	} else {
		while (index++ < position) {
			prev = current;
			current = current.next;
		}
		data = current.data;

		prev.next = current.next;
	}

	this.length--;

	return data;
};
CircularLinkedList.prototype.indexOf = function (value) {
	let current = this.head,
		index = 0;

	do {
		if (current.data === value) {
			return index;
		}
		index++;
		current = current.next;
	} while (current != this.head);

	return -1;
};
CircularLinkedList.prototype.indexOf = function (value) {
	let current = this.length,
		index = 0;

	do {
		if (current.data == value) {
			return index;
		}

		index++;
		current = current.next;
	} while (current != this.head);

	return -1;
};
CircularLinkedList.prototype.remove2 = function (value) {
	let index = this.indexOf(value);
	return this.removeAt(index);
};
// ================================= TEST CODE ===================================
let cll = new CircularLinkedList();

// node에 123추가
// node = new Node(123);

// 첫번째 노드가 헤드가 됨.
// cll.head = node;

// 두번째 노드가 마지막 부분인데, 그 부분을 다시 첫번째 부분으로 연결
// node.next = cll.head;

// cll.length++;
// console.log("==================123추가==================");
// console.log(cll);

// node = new Node(456);
// node.next = cll.head.next;
// cll.head.next = node;
// cll.length++;
// console.log("==================456추가==================");
// console.log(cll);

cll.append(1);
cll.append(10);
cll.append(100);
cll.insert(2, 1);
cll.insert(3, 3);
cll.printNode();

console.log("======================remove========================");
console.log(cll.removeAt(1000));
cll.printNode();
console.log(cll.removeAt(1));
cll.printNode();

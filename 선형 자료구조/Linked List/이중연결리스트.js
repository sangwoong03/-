function Node(data) {
	this.data = data;
	this.next = null;
	this.prev = null;
}

function DoubleLinkedList() {
	this.head = null;
	this.tail = null;
	this.length = 0;
}

DoubleLinkedList.prototype.size = function () {
	return this.length;
};

DoubleLinkedList.prototype.isEmpty = function () {
	return this.length === 0;
};

DoubleLinkedList.prototype.printNode = function () {
	process.stdout.write("head -> "); // head에서 시작
	for (let node = this.head; node != null; node = node.next) {
		// head에서 시작해서 node에 node.next값을 대입하여 tail(null)까지 반복
		process.stdout.write(`${node.data} -> `);
	}
	console.log("null"); // tail 도착
};

DoubleLinkedList.prototype.printNodeInverse = function () {
	let temp = [];

	process.stdout.write("null <- ");
	for (let node = this.tail; node != null; node = node.prev) {
		// tail에서 시작해서 node에 node.prev값을 대입하여 head(null)까지 반복
		temp.push(node.data); // node.data를 빈배열에 임시 저장
	}
	for (let i = temp.length - 1; i >= 0; i--) {
		process.stdout.write(`${temp[i]} <- `); // temp 배열에서 역순으로 출력하기
	}
	console.log("tail"); // tail에서 시작
};

DoubleLinkedList.prototype.append = function (value) {
	let node = new Node(value);

	if (this.head === null) {
		// 값이 없다면
		this.head = node; // node로 초기화
		this.tail = node; // node로 초기화
	} else {
		// 값이 있다면
		this.tail.next = node; // 마지막 부분의 다음 값으로 node 값 추가
		node.prev = this.tail; // 추가되는 node의 이전 부분은 this.tail 부분으로 변경
		this.tail = node; // this.tail이 추가되는 node를 가리키도록 변경
	}

	this.length++;
};

DoubleLinkedList.prototype.insert = function (value, position = 0) {
	if (position < 0 || position > this.length) {
		return false;
	}

	let node = new Node(value),
		current = this.head,
		index = 0,
		prev;

	if (position === 0) {
		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = current;
			this.head = node;
		}
	} else if (position === this.length) {
		current = this.tail;
		current.next = node;
		node.prev = node;
		this.tail = node;
	} else {
		while (index++ < position) {
			prev = current;
			current = current.next;
		}

		node.next = current;
		prev.next = node;

		current.prev = node;
		node.prev = prev;
	}
	this.length++;

	return true;
};

DoubleLinkedList.prototype.remove = function (value) {
	let current = this.head,
		prev = current;

	while (current.data != value && current.next != null) {
		prev = current;
		current = current.next;
	}

	if (current.data != value) {
		return null;
	}

	if (current === this.head) {
		this.head = current.next;
		if (this.length === 1) this.tail = null;
		else this.head.prev = null;
	} else if (current === this.tail) {
		this.tail = current.prev;
		this.tail.next = null;
	} else {
		prev.next = current.next;
		current.next.prev = prev;
	}
	this.length++;

	return current.data;
};

DoubleLinkedList.prototype.removeAt = function (position = 0) {
	if (position < 0 || position > this.length) {
		return null;
	}

	let current = this.head,
		index = 0,
		prev;

	if (position === 0) {
		this.head = current.next;
		if (this.length === 1) this.tail = null;
		else this.head.prve = null;
	} else if (position === this.length - 1) {
		current = this.tail;
		this.tail = current.prev;
		this.tail.next = null;
	} else {
		while (index++ < position) {
			prev = current;
			current = current.next;
		}

		prev.next = current.next;
		current.next.prev = prev;
	}

	this.length--;

	return current.data;
};

DoubleLinkedList.prototype.indexOf = function (value) {
	let current = this.head,
		index = 0;

	while (current != null) {
		if (current.data === value) {
			return index;
		}
		index++;
		current = current.next;
	}

	return -1;
};

DoubleLinkedList.prototype.remove2 = function (value) {
	let index = this.indexOf(value);
	return this.removeAt(index);
};
// ============================= TEST CODE =============================

let dll = new DoubleLinkedList();
let node; // 임시변수
console.log("========초기 DLL========");
console.log(dll);

node = new Node(123); // data: 123인 Node()를 새로 생성
dll.head = node; // 새로운 이중연결리스트의 head에 Node(123)
dll.tail = node; // 새로운 이중연결리스트의 tail에 Node(123)
dll.length++; // 새로운 이중연결리스트의 길이 1개 추가
console.log("========이중연결리스트 구조 DLL========");
console.log(dll);

node = new Node(456);
dll.tail.next = node; // next 값으로 Node(456)
node.prev = dll.tail; // prev 값으로 Node(123)
dll.tail = node;
dll.length++;
console.log("========이중연결리스트 구조 DLL========");
console.log(dll);

dll.append(1);
dll.append(10);
dll.append(100);
console.log("========이중연결리스트 값 추가 및 print노드 구조 DLL========");
dll.printNode();
dll.printNodeInverse();

console.log("========이중연결리스트 값 삽입 및 print노드 구조 DLL========");
dll.insert(2, 3);
dll.insert(5, 2);
dll.printNode();
dll.printNodeInverse();

console.log("========이중연결리스트 값 삭제 및 print노드 구조 DLL========");
// console.log(dll.remove(2));
// dll.printNode();
// dll.printNodeInverse();
// console.log(dll.remove(1));
// dll.printNode();
// dll.printNodeInverse();
// console.log(dll.remove(100));
// dll.printNode();
// dll.printNodeInverse();

console.log(
	"========이중연결리스트 인덱스 값 삭제 및 print노드 구조 DLL========",
);
// console.log(dll.removeAt(2));
// dll.printNode();
// dll.printNodeInverse();
// console.log(dll.removeAt(1));
// dll.printNode();
// dll.printNodeInverse();
// console.log(dll.removeAt(100));
// dll.printNode();
// dll.printNodeInverse();

console.log(
	"========이중연결리스트 인덱스 + 값 삭제 및 print노드 구조 DLL========",
);
console.log(dll.indexOf(1000));
console.log(dll.remove2(2));
dll.printNode();
dll.printNodeInverse();
console.log(dll.remove2(1));
dll.printNode();
dll.printNodeInverse();
console.log(dll.remove2(100));
dll.printNode();
dll.printNodeInverse();

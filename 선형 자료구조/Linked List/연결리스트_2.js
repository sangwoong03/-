// Node(): data와 point를 가지고 있는 객체
function Node(data) {
	this.data = data;
	this.next = null; // point: null값으로 초기화 >> linked list의 tail은 null로 끝나기 때문.
}

// LinkedList(): head와 length를 가지고 있는 객체
function LinkedList() {
	this.head = null; // 첫 부분 데이터가 없기 때문에 null 값
	this.length = 0; // 리스트의 크기를 찾기 위해 사용 디폴트는 0
}

// size(): 연결 리스트 내 노드 개수 확인
LinkedList.prototype.size = function () {
	return this.length;
};

// isEmpty(): 객체 내 노드 존재 여부 파악
LinkedList.prototype.isEmpty = function () {
	return this.length === 0;
};

// printNode(): 노드 출력
LinkedList.prototype.printNode = function () {
	for (let node = this.head; node != null; node = node.next) {
		process.stdout.write(`${node.data} -> `);
	}
	console.log("null");
};

// append(): 연결 리스트 가장 끝에 노드 추가
LinkedList.prototype.append = function (value) {
	let node = new Node(value),
		current = this.head;

	if (this.head === null) {
		// 헤드가 첫번째 노드를 가리킬 때
		this.head = node;
	} else {
		while (current.next != null) {
			// next 값이 null인 경우는 마지막 노드임.
			current = current.next;
		}
		current.next = node;
	}

	this.length++;
};

// test code
let ll = new LinkedList();
// console.log(ll);

// ll.head = new Node(123);
// ll.length++;
// console.log(ll);

// ll.head.next = new Node(456);
// ll.length++;
// console.log(ll);

ll.append(1);
ll.printNode();
ll.append(10);
ll.printNode();
ll.append(100);
ll.printNode();
console.log(ll.size());

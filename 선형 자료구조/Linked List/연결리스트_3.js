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

// insert(): position 위치에 노드 추가
LinkedList.prototype.insert = function (value, position = 0) {
	if ((position < 0) | (position > this.length)) {
		return false;
	}

	let node = new Node(value),
		current = this.head,
		index = 0,
		prev;

	if (position == 0) {
		node.next = current;
		this.head = node;
	} else {
		while (index++ < position) {
			// index자리에 value insert
			prev = current;
			current = current.next;
		}

		node.next = current;
		prev.next = node;
	}

	this.length++;

	return true;
};

// test code
let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode();

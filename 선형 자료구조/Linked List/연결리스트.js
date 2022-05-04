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
LinkedList.prototype.remove = function (value) {
	let current = this.head,
		prev = current;

	while (current.data !== value && current.next !== null) {
		prev = current;
		current = current.next;
	}

	if (current.data !== value) {
		return null;
	}

	if (current === this.head) {
		this.head = current.next;
	} else {
		prev.next = current.next;
	}

	this.length--;

	return current.data;
};
LinkedList.prototype.removeAt = function (position = 0) {
	if (position < 0 || position > this.length) {
		return null;
	}

	let current = this.head,
		index = 0,
		prev;

	if (position === 0) {
		this.head = current.next;
	} else {
		while (index++ < position) {
			prev = current;
			current = current.next;
		}

		prev.next = current.next;
	}

	this.length--;

	return current.data;
};
LinkedList.prototype.indexOf = function (value) {
	let current = this.head,
		index = 0;

	while (current !== null) {
		if (current.data === value) {
			return index;
		}

		index++;
		current = current.next;
	}

	return -1;
};
LinkedList.prototype.remove2 = function (value) {
	let index = this.indexOf(value);
	return this.removeAt(index);
};
// ================================== TEST CODE ==================================
let ll = new LinkedList();
console.log(ll);

ll.head = new Node(123);
ll.length++;
console.log(ll);

ll.head.next = new Node(456);
ll.length++;
console.log(ll);

ll.head = new Node(1234);
ll.length++;
console.log(ll);

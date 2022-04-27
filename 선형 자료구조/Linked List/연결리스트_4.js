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
let ll = new LinkedList();

ll.insert(1);
ll.insert(10);
ll.insert(100);
ll.insert(2, 1);
ll.insert(3, 3);
ll.printNode();

console.log(ll.remove(1000));
ll.printNode();
console.log(ll.remove(1));
ll.printNode();
console.log(ll.remove(2));
ll.printNode();
console.log(ll.remove(100));
ll.printNode();

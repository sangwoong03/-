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

// test code
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

function Queue(array) {
	this.array = array ? array : [];
	this.tail = array ? array.length : 0;
	this.head = 0;
}

Queue.prototype.enqueue = function (element) {
	// 배열의 가장 뒷부분의 다음 인덱스 위치에 element 삽입
	return (this.array[this.tail++] = element);
};

Queue.prototype.dequeue = function () {
	// head와 tail이 0으로 같은 경우 빈 데이터 셋이므로 undefined 반환
	if (this.tail === this.head) return undefined;

	// 반환되는 element는 배열의 첫번째 값이므로 index = 0 값 활용
	let element = this.array[this.head];

	// 현재 element를 삭제하고 그 element를 담고 있는 공간을 delete처리한다.
	// 그 element를 삭제한 뒤 head 값 업데이트 (++)
	delete this.array[this.head++];
	console.log(`head++ : ${this.head}`);
	console.log(this.array);
	return element;
};

let queue = new Queue(["a", "b", "c", "d", "e"]);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);

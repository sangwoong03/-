// Stack() 생성자 함수
function Stack(array) {
	this.array = array ? array : [];
}
// 위와 동일
// function Stack(array = []) {
// 	this.array = array;
// }

// getBuffer() : 객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function () {
	return this.array.slice(); // 매개변수를 입력하지 않았을 때 배열 내 모든 인자를 복사하여 반환한다
};

// isEmpty() : 객체 내 데이터 O / X
Stack.prototype.isEmpty = function () {
	return this.array.length === 0;
};

// push() 데이터 추가
Stack.prototype.push = function (element) {
	return this.array.push(element);
};

// pop() 데이터 삭제
Stack.prototype.pop = function () {
	return this.array.pop();
};

// peak() 가장 끝 데이터 반환
Stack.prototype.peek = function () {
	return this.array[this.array.length - 1];
};

// size() 스택 내 데이터 개수 확인
Stack.prototype.size = function () {
	return this.array.length;
};

// indexOf() 데이터의 위치 확인
Stack.prototype.indexOf = function (element, position = 0) {
	for (let i = position; i < this.array.length; i++) {
		if (element === this.array[i]) {
			return i;
		}
	}
	// return this.array.indexOf(element, position);
};

// includes() 데이터 존재 여부 확인
Stack.prototype.includes = function (element) {
	for (let i = 0; i < this.array.length; i++) {
		if (element === this.array[i]) {
			return true;
		}
	}
	return false;

	// return this.array.includes(element)
};

let stack = new Stack([1, 2, 3]);
console.log("=========== 새로운 스택 만들기 ===========");
console.log(stack);

console.log("=========== indexOf() ===========");
console.log(stack.indexOf(2));

console.log("=========== includes() ===========");
console.log(stack.includes(4));

let data = stack.getBuffer();
console.log("=========== getBuffer를 통한 스택 데이터 복사 ===========");
console.log(data);

stack.push(4);
console.log("=========== push() ===========");
console.log(stack);

stack.pop();
console.log("=========== pop() ===========");
console.log(stack);
console.log(`삭제 값 : ${stack.pop()}`);

console.log("=========== peek() ===========");
console.log(stack);
console.log(stack.peek());

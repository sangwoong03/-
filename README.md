## 자료구조

해당 레포지토리는 자료구조 및 알고리즘 공부 목적 레포지토리입니다.



<br>

## 1. 선형 자료구조



1. 배열
2. 프로토타입

   - 어떤 객체가 만들어지기 위해 객체의 모태가 되는 원형
   - Javascript는 일반적인 객체지향 언어와는 달리, 프로토타입을 이용한 복사를 통해 새로운 객체를 생성.
   - 일반적인 객체 생성 방식
     - 속성은 생성자
     - 메서드는 프로토타입에서 정의

   ```javascript
   // 생성자 속성 정의
   function Person(name, age) {
   	this.name = name;
   	this.age = age;
   }

   // prototype을 이용한 Person 메서드 정의
   Person.prototype.isAdult = function () {
   	return this.age > 18;
   };

   // 객체 생성
   const p1 = new Person("Bob", 26);
   const p2 = new Person("Alice", 16);

   console.log(p1); // Person { name : "Bob", age : 18}
   console.log(p2); // Person { name : "Alice", age : 16}
   console.log(p1.isAdult()); // true
   console.log(p2.isAdult()); // false
   ```

   <br>

3. [연결리스트](https://github.com/sangwoong03/Data-sturcture-Algorithm/tree/master/%EC%84%A0%ED%98%95%20%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0/Linked%20List)
4. 이중연결리스트
5. 원형연결리스트
6. [스택 (Stack)](https://github.com/sangwoong03/Data-sturcture-Algorithm/tree/master/%EC%84%A0%ED%98%95%20%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0/Stack)
7. [큐 (Queue)](https://github.com/sangwoong03/Data-sturcture-Algorithm/tree/master/%EC%84%A0%ED%98%95%20%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0/Queue)
8. 우선순위큐
9. 원형큐
10. 데크
11. [딕셔너리](https://github.com/sangwoong03/Data-sturcture-Algorithm/tree/master/%EC%84%A0%ED%98%95%20%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0/Dictionary)
12. [해시테이블](https://github.com/sangwoong03/Data-sturcture-Algorithm/tree/master/%EC%84%A0%ED%98%95%20%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0/Hash_table)
13. 체이닝해시테이블

### 2. 비선형 자료구조


1. [트리]
2. [그래프]
3. [DFS]
4. [힙]
5. [트라이]

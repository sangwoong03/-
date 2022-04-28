### 자료구조

---

<br>

## 1. 선형 자료구조

---

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

3. 연결리스트
4. 이중연결리스트

### 2. 비선형 자료구조

---

<br>

## 1. 선형 자료구조

---

<br>

### **1. 배열**

- 자바스크립트에서의 배열은 Hash 기반의 객체
- [**[배열 조작 방법]**](https://learnjs.vlpt.us/basics/09-array-functions.html)

  1.  배열 추가/삭제:

      - push() ... 원소가 배열의 가장 _뒷자리_ 에 추가됨.
      - pop() ... 원소가 배열의 가장 _뒷자리_ 에서 추출됨.
      - unshift() ... 원소가 배열의 가장 _앞자리_ 에 추가됨.
      - shift() ... 원소가 배열의 가장 _앞자리_ 에 추출됨.

      ```javascript
      let fruits = ["apple", "banana", "mango"];
      let result;

      result = fruits.push("peach");
      console.log(fruits); // ["apple", "banana", "mango", "peach"]
      console.log(result); // 4

      result = fruits.pop();
      console.log(fruits); // ["apple", "banana", "mango"]
      console.log(result); // ["peach"]

      result = fruits.unshift("peach");
      console.log(fruits); // ["peach", "apple", "banana", "mango"]
      console.log(result); // 4

      result = fruits.shift();
      console.log(fruits); // ["apple", "banana", "mango"]
      console.log(result); // ["peach"]
      ```

  2.  배열 삭제/변경:

      - Arr.splice(index, deleteCount, elem1, ... , elemN) ... 기존 배열을 바꿈.
      - Arr.slice([start], [end]) ... 기존 배열을 바꾸지 않음.
      - Arr.concat(arg1, arg2, ... , argN) ... 기존 배열을 바꾸지 않음.

      ```javascript
      //Arr[index] 이후의 모든 원소를 삭제
      let Arr = [1, 2, 3];

      console.log(Arr.splice(1)); // [2, 3]
      console.log(Arr); // [1]

      //Arr[index] 이후부터 N번째 원소까지 삭제
      let Arr_2 = [4, 5, 6, 7];
      console.log(Arr_2.splice(1, 1)); // [5]
      console.log(Arr_2); // [4, 6, 7]

      //Arr[index] 이후부터 N번째 원소를 다음 원소로 대체
      let Arr_3 = [1, 2, 3, 4, 5, 6, 7];
      console.log(Arr_3.splice(2, 3, 8, 9, 10)); // [3, 4, 5]
      console.log(Arr_3); // [1, 2, 8, 9, 10, 6, 7]
      ```

  3.  배열 반복문:

      - for ... length (index 접근)
      - for ... of ... (element 접근)
      - for ... in ... (key 접근)

      ```javascript
      let Arr = ["a", "b", "c"];

      // for ... length
      for (let i = 0; i < Arr.length; i++) {
      	console.log(Arr[i]); // a, b, c
      }

      // for ... of ...
      for (let elem of Arr) {
      	console.log(elem); // a, b, c
      }

      // for ... in ...
      for (let key in Arr) {
      	console.log(Arr[key]); // a, b, c
      }
      ```

  4.  배열 탐색:

      - indexOf(item, from) ... from번째부터의 item의 index 값 (앞→뒤)
      - lastIndexOf(item, from) ... from번째부터 item의 index값 (뒤→앞)
      - includes(item, from) ... from번째부터 item 유무 확인.

      ```javascript
      const Arr = ["a", "b", "c", "d", "e", "c"];

      console.log(Arr.indexOf("c")); // 2
      console.log(Arr.indexOf("f")); // -1
      console.log(Arr.indexOf("c", 2)); //5

      console.log(Arr.lastIndexOf("c")); // 5
      console.log(Arr.lastIndexOf("c", -2)); // 2
      console.log(Arr.lastIndexOf("d", 0)); // -1

      console.log(Arr.includes("a")); // true
      console.log(Arr.includes("f")); // false
      ```

  5.  배열 정렬/반전/변환:

      - sort() ... 오름차순 정렬 (숫자 0 ~ / 문자 아스키 or 알파벳 순 ~)
      - reverse() ... 내림차순 정렬 (sort의 반대)
      - join(seperator) ... seperator (default: ,) 기준으로 요소를 나누어 정렬

      ```javascript
      // sort와 reverse의 경우 10의 자리 숫자부터 정렬을 제대로 하지 못할 수 있음.
      const nums = [1, 4, 9, 2, 31];
      console.log(nums.sort()); // [1, 2, 31, 4, 9]
      console.log(nums.reverse()); // [9, 4, 31, 2, 1]
      // 고차 함수 사용 ((x, y) => (x - y))
      console.log(nums.sort((x, y) => x - y)); // [1, 2, 4, 9, 31]
      console.log(nums.reverse((x, y) => x - y)); // [31, 9, 4, 2, 1]
      console.log(nums.sort((x, y) => y - x)); // [31, 9, 4, 2, 1]

      const nums_2 = [1, 2, 3, 4, 5]
      console.log(nums_2.join(":")) [1 : 2 : 3 : 4 : 5]
      ```

  6.  고차 함수

      - forEach() ... for 문 대체 가능

        ```javascript
        const nums = [1, 2, 3, 4, 5];
        nums.forEach((elem) => console.log(elem)); // 1 2 3 4 5
        ```

      - map()

        ```javascript
        const nums = [1, 2, 3, 4, 5];
        const square = (elem) => elem * elem;
        const squared = nums.map(square);
        console.log(square); // [1, 4, 9, 16, 25]
        ```

      - filter()

        ```javascript
        const todos = [
        	{
        		id: 1,
        		text: "자바스크립트",
        		done: true,
        	},
        	{
        		id: 2,
        		text: "리액트",
        		done: true,
        	},
        	{
        		id: 3,
        		text: "백엔드",
        		done: false,
        	},
        	{
        		id: 4,
        		text: "프로젝트",
        		done: true,
        	},
        ];
        const haveTodo = todos.filter((todo) => todo.done === false);
        console.log(haveTodo); // [{id: 3, text: "백엔드", done: true}]
        ```

      - reduce( function(acc, current){}, initialValue)

        ```javascript
        const nums = [1, 2, 3, 4, 5];
        let sum = nums.reduce(
        	(accumulator, current) => accumulator + current,
        	0,
        );
        console.log(sum); // 15
        ```

      <br>
      <br>

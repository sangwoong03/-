## 1. 선형 자료구조

---

<br>

### **3. 연결리스트**

- 각 노드가 데이터와 포인터를 가지며, 한 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료 구조
- 구현 메서드
  - 노드 개수 / 비어 있는지 확인 / 노드 출력 : LinkedList.size(), LinkedList.isEmpty(), LinkedList.printNode()
  - 노드 추가: LinkedList.append(), LinkedList.insert()
  - 노드 삭제: LinkedList.remove(), LinkedList.removeAt()
  - 데이터 위치 확인: LinkedList.indexOf();
- 구성 요소
  ![image](./LinkedList.png)
  - NODE
    - data : 값을 갖고 있는 element
    - next : 또 다른 node를 가리킬 수 있는 pointer
  - LinkedList (여러 개의 노드로 구성)
    - HEAD : 첫 지점. (첫번째 노드를 가리키는 pointer)
    - null : 끝 지점. (마지막 next 값에 null이 저장)

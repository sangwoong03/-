## 1. 선형 자료구조

---

<br>

### **6. 큐**

---

- 먼저 넣은 데이터가 먼저 나오는 `FILO(First In Last Out)` 기반의 선형 자료 구조이다.
- 구현 메서드
  - ..데이터 전체 획득 / 비어 있는지 확인: Queuek.getBuffer(), Queuek.isEmpty()
  - ..추가 / 삭제 : Queue.enqueue(), Queue.dequeue()
  - ..첫번째 데이터 / 사이즈 / 전체 삭제: Queuek.front(), Queuek.size(), Queue.clear()
- 구성 요소
  ![image](./queue.png)
  - stack과 동일한 배열 기반의 데이터
  - 데이터 삽입 뒤쪽에서, 데이터 반환은 앞쪽에서 이루어짐.
- 사례
  - 이메일, 메신저 등 먼저 보낸 매시지의 처리 순서
  - 쇼핑몰 주문, 콜센터 대기 등 순서가 필요한 경우

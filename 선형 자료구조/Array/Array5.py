# 5. 나무 그리기
# 나무를 그리는 프로그램을 만들자.
# 자연수를 높이로 입력받고 대칭형 나무 문자열을 만들어 반환한다.
# 각 행 별로 개행 문자(\n)를 넣어주면서 "*"을 출력하며 출력 값 형태로 나무를 그려준다.

def answer(height):
    for i in range(height):
        print(' '*(height-i), end='')
        print("*" * (2*i - 1))


input = [3, 5, 7]

for n in input:
    print(answer(n))

# 8. 벽돌 옮기기
# 벽돌의 높이를 맞추는 프로그램을 제작하시오
# 입력은 배열 형태의 정수이며, 같은 높이를 맞추기 위해 옮겨야 하는 벽돌 개수를 반환한다
# 입력으로 들어오는 배열은 남는 벽돌 없이 높이가 딱 나눠 떨어지도록 들어온다.

import math


def answer(height):

    # 높이의 평균 구하기 / 소수점 버리기
    avg = math.trunc(sum(height) / len(height))

    # 이동해야되는 벽돌 개수 구하기
    count = 0

    # height 수 만큼 loop 순회
    for i in range(len(height)):
        # 만약 배열 중 평균 보다 큰 값이 있다면
        if (height[i] > avg):
            # 그 차이를 count에 더해서 증가시키기
            count += height[i] - avg

    # 그 값 return
    return count


input = [
    [5, 2, 4, 1, 7, 5],
    [12, 8, 10, 11, 9, 5, 8],
    [27, 14, 19, 11, 26, 25, 23, 15]
]

for i in range(len(input)):
    print(answer(input[i]))

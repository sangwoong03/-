# 2. 체스 세트
# 체스판과 체스 기물이 완전히 한 세트를 이루지 않고 있다.
# 게임을 위해 부족하거나 많은 기물의 개수를 계산하여 반환하는 프로그램을 작성하라.
# 기물의 개수는 배열 형태로 king부터 pawns 순으로 들어오며
# 한 게임을 위해 필요한 기물의 개수는 다음과 같다.
#  * 순서 및 기물 필요 개수: king(1), queen(1), rooks(2), bishops(2), knights(2), pawns(8)

def answer(arr):
    result = []
    chess = [1, 1, 2, 2, 2, 8]

    for i in range(len(chess)):
        count = arr[i] - chess[i]
        result.append(count)

    return result


input = [
        [0, 1, 2, 2, 2, 7],
        [2, 1, 2, 1, 2, 1],
        [0, 1, 1, 5, 3, 6],
]

for i in range(len(input)):
    print(answer(input[i]))

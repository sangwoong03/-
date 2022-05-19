# 6. TWO SOME
# 배열과 정수 값이 주어질 때, 배열 내 두 값을 합하여 정수 값을 만들 수 있도록 두개의 index를 반환
# 각 입력에 정확히 하나의 솔루션이 있다고 가정하고 동일한 요소를 두번 사용하지 않는다.
# 배열의 index는 오름차순으로 정렬하여 반환한다.

def answer(arr, n):
    result = []

    for i in range(len(arr)):
        for j in range(len(arr)):
            if ((i < j) and (arr[i] + arr[j] == n)):
                result.append(i)
                result.append(j)

    return result


input = [
    [[7, 2, 11, 15], 9],
    [[3, 2, 4], 6],
    [[3, 3], 6],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19]
]

for i in range(len(input)):
    print(answer(input[i][0], input[i][1]))

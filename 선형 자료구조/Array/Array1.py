#  1. 수열 최솟값 위치
#  수열이 주어질 때 ,이 수열의 있는 수 중 최소값의 위치를 모두 출력하는 프로그램 작성
# 입력은 자연수로 된 배열을 받고, 시작 위치는 0으로 계산하여 최소값의 위치를 배열로 반환한다.
# 모든 수는 100 이하의 자연수로 입력 받는다.

def answer(nums):
    result = []

    # 최솟값 구하기
    min = 100
    for i in range(len(nums)):
        if (min > nums[i]):
            min = nums[i]

    # 최솟값 인덱스 구하기
    for i in range(len(nums)):
        if (min == nums[i]):
            result.append(i)

    return result


input = [
        [5, 2, 10, 2],
        [4, 5, 7, 4, 8],
        [12, 11, 11, 16, 11, 12],
]

for i in range(len(input)):
    print(answer(input[i]))

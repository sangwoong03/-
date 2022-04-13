from itertools import combinations

nums = [1, 2, 3]
coms = list(combinations(nums, 2))

print(type(coms[1]))  # 조합 결과 출력 ==> 배열 원소 타입은 튜플


#===================================================#
# 참조: https://cotak.tistory.com/70

def comb(arr, n):
    result = []

    if n == 0:
        return [[]]
    for i in range(0, len(arr)):
        elem = arr[i]
        rest_arr = arr[i + 1:]
        for C in comb(rest_arr, n-1):
            result.append([elem]+C)
    return result


print(comb(nums, 2))

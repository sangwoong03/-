from itertools import permutations  # 순열 라이브러리

arr = ["a", "b", "c"]
perm = list(permutations(arr, 3))

print(perm)  # 순열 결과 출력
print(len(perm))  # 개수 출력

print(' '.join(arr))  # 리스트를 문자열로 변환


#===================================================#
# 배열의 원소로 새로운 순열 반환
# 참조: https://cotak.tistory.com/70
def permutaition(arr, n):
    result = []

    if n == 0:
        return [[]]

    for i, elem in enumerate(arr):
        for P in permutaition(arr[:i] + arr[i+1:], n-1):
            result += [[elem]+P]

    return result


print(permutaition(arr, 3))

from itertools import permutations  # 순열 라이브러리

arr = ["a", "b", "c"]
perm = list(permutations(arr, 3))

print(perm)  # 순열 결과 출력
print(len(perm))  # 개수 출력

print(' '.join(arr))  # 리스트를 문자열로 변환


#===================================================#

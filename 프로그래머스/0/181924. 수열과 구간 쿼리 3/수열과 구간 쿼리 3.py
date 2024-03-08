def solution(arr, queries):
    for elem in queries:
        first_value = arr[elem[0]]
        arr[elem[0]] = arr[elem[1]]
        arr[elem[1]] = first_value
    return arr
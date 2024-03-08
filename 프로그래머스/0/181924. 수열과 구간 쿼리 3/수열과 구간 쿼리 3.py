def solution(arr, queries):
    for elem in queries:
        arr[elem[0]],arr[elem[1]] = arr[elem[1]],arr[elem[0]]        
    return arr
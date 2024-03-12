def solution(arr, queries):
    result = []

    for query in queries:
        sub_array = arr[query[0]:query[1]+1]
        
        valid_numbers = [num for num in sub_array if num > query[2]]

        if valid_numbers:
            result.append(min(valid_numbers))
        else:
            result.append(-1)

    return result
def solution(a, d, included):
    result = 0
    current_term = a

    for i in range(len(included)):
        if included[i]:
            result += current_term
        current_term += d

    return result
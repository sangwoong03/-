def solution(number, n, m):
    answer = ''
    
    if number % n == 0 and number % m == 0:
        answer = 1
    else:
        answer = 0
    return answer
def solution(n):
    answer = 0
    for i in range(0, n+1):
        if n % 2 == 0 and i % 2 == 0:
            print(i)
            answer += i**2
        elif n % 2 != 0 and i % 2 != 0:
            answer += i
    
    return answer
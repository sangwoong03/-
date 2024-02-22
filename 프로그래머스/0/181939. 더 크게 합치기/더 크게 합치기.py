def solution(a, b):
    answer = int(f"{a}{b}") if int(f"{a}{b}") > int(f"{b}{a}") else int(f"{b}{a}")
    
    return answer
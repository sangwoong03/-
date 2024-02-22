def solution(a, b):
    answer = int(f"{a}{b}") if int(f"{a}{b}") > 2 * a * b else 2 * a * b
    return answer
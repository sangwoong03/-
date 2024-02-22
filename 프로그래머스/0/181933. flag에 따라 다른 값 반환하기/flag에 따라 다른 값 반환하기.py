def solution(a, b, flag):
    operator = '+' if flag else '-'
    return eval(f"{a} {operator} {b}")
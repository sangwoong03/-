def solution(ineq, eq, n, m):
    newEq = '' if eq == '!' else eq
    answer = 1 if eval(f"{n} {ineq}{newEq} {m}") else 0
    
    return answer
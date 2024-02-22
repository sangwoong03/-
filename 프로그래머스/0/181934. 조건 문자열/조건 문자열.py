def solution(ineq, eq, n, m):
    return int(eval(f"{n} {ineq}{eq.replace('!', '')} {m}"))
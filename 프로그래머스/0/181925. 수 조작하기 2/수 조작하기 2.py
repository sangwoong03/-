def solution(numLog):
    result = []

    for i in range(len(numLog)):
        num = numLog[i] - (numLog[i-1] if i > 0 else 0)

        if num == 1:
            result.append("w")
        elif num == -1:
            result.append("s")
        elif num == 10:
            result.append("d")
        elif num == -10:
            result.append("a")

    return ''.join(result)
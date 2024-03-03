def solution(n, control):
    for command in control:
        if command == 'w':
            n += 1
        elif command == 's':
            n -= 1
        elif command == 'd':
            n += 10
        elif command == 'a':
            n -= 10

    return n
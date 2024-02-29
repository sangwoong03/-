def solution(num_list):
    answer1 = 1 
    for i in num_list:
        answer1 *= i
    return int(answer1 < sum(num_list) ** 2)

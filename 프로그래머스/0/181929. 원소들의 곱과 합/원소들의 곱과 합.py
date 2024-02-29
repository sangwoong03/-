def solution(num_list):
    answer_1 = 1
    answer_2 = 0
    
    for i in range(len(num_list)):
        answer_1 = answer_1 * int(num_list[i])
    
    for i in range(len(num_list)):
        answer_2 += int(num_list[i])
    
    return 0 if answer_1 > answer_2 ** 2 else 1
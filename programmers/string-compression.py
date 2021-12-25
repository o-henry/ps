def solution(s):
    ret, n = 0, len(s) - 1

    for i in range(1, n):
        if s[0:i] == s[i+1: i+2]:

    return ret


print(solution('abcabcdede'))

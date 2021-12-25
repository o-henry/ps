n = input()


def solution(n):
    m = len(n) // 2
    return sum(list(map(int, n[:m]))) == sum(list(map(int, n[m:]))) and 'LUCKY' or 'READY'


print(solution(n))

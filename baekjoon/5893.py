n = int(input())


def solution(n):
    n = int(str(n), 2)
    n *= 17
    print(bin(n)[2:])


print(solution(n))

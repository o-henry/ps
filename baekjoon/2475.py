n = list(map(int, input().split()))


def solution(n):
    r = [n ** 2 for n in n]
    return sum(r) % 10


print(solution(n))

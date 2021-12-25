n, m = map(int, input().split())


def solution(n, m):
    li = []
    for x in range(1, n+1):
        if n % x == 0:
            li.append(x)

    return li[m - 1]


print(solution(n, m))

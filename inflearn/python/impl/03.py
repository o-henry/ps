n, m = map(int, input().split())
p = list(map(int, input().split()))


def solution(n, m, p):
    r = set()

    for i in range(n):
        for j in range(i+1, n):
            for k in range(j+1, n):
                r.add(p[i] + p[j] + p[k])

    r = list(r)
    r.sort(reverse=True)
    return r[m - 1]


print(solution(n, m, p))

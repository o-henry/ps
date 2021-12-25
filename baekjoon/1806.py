N, S = map(int, input().split())
l = list(map(int, input().split()))


def solution(N, S):
    p1, p2, sum = 0, 0, 0
    m = 100001

    while True:
        if sum >= S:
            sum -= l[p1]
            p1 += 1
            m = min(m, p2 - p1 + 1)
        else:
            if p2 == N:
                break
            else:
                sum += l[p2]
                p2 += 1

    if m == 100001:
        m = 0

    return m


print(solution(N, S))

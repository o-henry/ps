from collections import deque

s, e = map(int, input().split())

max = 10000


def solution(s, e):
    d = [0] * (max + 1)
    c = [0] * (max + 1)
    d[s] = 0
    c[s] = 1

    q = deque()
    q.append(s)

    while q:
        f = q.popleft()

        if f == e:
            break

        for n in (f-1, f+1, f+5):
            if 0 < n <= e:
                if c[n] == 0:
                    q.append(n)
                    c[n] = 1
                    d[n] = d[f] + 1

    return d[e]


print(solution(s, e))

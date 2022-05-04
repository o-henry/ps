from collections import deque

N, K = map(int, input().split())
q = deque(_ for _ in range(1, N+1))
r = []


def josephus():
    p = 0
    while len(q):
        for _ in range(len(q) - 1):
            left = q.popleft()
            q.append(left)
            p += 1

            print(q)

            if p == K:
                r.append(q.pop())


print(r)

from collections import deque

vtd = []
q = deque()
cnt = 0


def bfs(i, j):
    global cnt
    q.append((i, j))

    while q:
        nx, ny = q.popleft()
        if not nx and ny in vtd:
            if nx == a and ny == b:
                break
        else:
            cnt += 1
            vtd.append((nx, ny))


n = int(input())
a, b = map(int, input().split())
m = int(input())

for _ in range(m):
    x, y = map(int, input().split())
    bfs(x, y)

print(cnt)

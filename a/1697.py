"""
* 가장 빠른 시간 구하기
조건 만큼 증가한 좌표에 대한 BFS
"""
from collections import deque

N, K = map(int, input().split())
vtd = [0] * (100000 + 1)


def bfs():
    q = deque()
    q.append(N)

    while q:
        p = q.popleft()

        if p == K:
            return vtd[p]

        for i in (p-1, p+1, p*2):
            if 0 <= i <= 100000 and not vtd[i]:
                vtd[i] = vtd[p] + 1
                q.append(i)


print(bfs())

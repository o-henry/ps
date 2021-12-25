N = int(input())
T = sorted([list(map(int, input().split()))
           for _ in range(N)], key=lambda x: (x[1], x[0]))

ret, end = 0, 0

for s, e in T:
    if s >= end:
        ret += 1
        end = e

print(ret)

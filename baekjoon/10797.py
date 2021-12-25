N = int(input())
M = list(map(int, input().split()))

ret = 0
for x in M:
    if N == x:
        ret += 1

print(ret)

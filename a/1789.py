N = int(input())
S = 0
ret = 0

for x in range(1, N+1):
    S += x
    ret += 1
    if N < S:
        ret -= 1
        print(ret)
        break


# 20
# 1 2 3 4 10

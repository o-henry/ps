N = int(input())
W = sorted(list(map(int, input().split())))


p = 1
for x in W:
    if p < x:
        break
    p += x

print(p)

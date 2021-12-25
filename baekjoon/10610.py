# 순열
import sys
from itertools import permutations

N = list(map(str, sys.stdin.readline().rstrip()))
p = list(map("".join, permutations(N, len(N))))
m = -1

for x in p:
    x = int(x)

    if x % 30 == 0 and x > m:
        m = x

print(m)

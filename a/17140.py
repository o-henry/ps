from collections import Counter

r, c, k = map(int, input().split())
matrix = [list(map(int, input().split())) for _ in range(3)]

for x in matrix:
    c = Counter(x)
    s = sorted(c.items(), key=lambda x: x[1])


# [(2, 1), (1, 2)]
# [(2, 1), (1, 1), (3, 1)]
# [(3, 3)]

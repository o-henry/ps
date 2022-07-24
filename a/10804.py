cards = [n for n in range(1, 21)]

for _ in range(10):
    N, M = map(int, input().split())

    operand = []
    for x in reversed(range(N-1, M)):
        operand.append(cards[x])

    cards[N-1:M] = operand


print(*cards)

# swap
# L[a], L[b] = L[b], L[a]


# l = [x for x in range(1, 21)]
# for _ in range(10):
#     a, b = map(int, input().split())
#     l[a-1:b] = reversed(l[a-1:b])
# print(*l)

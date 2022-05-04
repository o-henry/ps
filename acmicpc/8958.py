T = int(input())

for _ in range(T):
    ox = list(input())
    t, s = 0, 0

    for a in ox:
        if a == 'O':
            t += 1
            s += t
        else:
            t = 0
    print(s)

W = [input() for _ in range(5)]
ret = ''

for i in range(15):
    for j in range(5):
        if i >= len(W[j]):
            continue
        else:
            ret += W[j][i]

print(ret)

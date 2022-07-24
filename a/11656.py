S = input()
l = [S]

for i in range(1, len(S)):
    l.append(S[i:])

for x in sorted(l):
    print(x)

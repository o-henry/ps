T = int(input())
R, S = input().split()
ret = ''

for _ in range(T):
    for _ in range(int(R)):
        print(S[_])

    print(ret, end="\n")

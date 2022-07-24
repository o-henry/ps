N, n, P = map(int, input().split())
l = list(map(int, input().split()))


def solution(N, n, P):

    try:
        if N == 0:
            print(1)
        else:
            if N == P and l[-1] >= n:
                print(-1)
            else:
                r = N + 1
                for i in range(N):
                    if l[i] <= n:
                        r = i + 1
                        break
                print(r)
    except EOFError:
        print("")


solution(N, n, P)

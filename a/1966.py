# value 기준으로 정렬하고
# enumerate 를 활용해서 index값을 저장 및 도출


T = int(input())

for _ in range(T):
    N, M = map(int, input().split())
    q = list(e for e in enumerate(list(map(int, input().split()))))
    q = sorted(q, key=lambda x: x[1], reverse=True)

    print(q)
    if M == 0 and N == 1:
        print(1)
        break

    for i in range(N):
        if M == 0 and q[i][0] == M:
            print(i)
            break

        if q[i][0] == M:
            print(i+1)
            break

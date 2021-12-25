"""
정렬 후, 가장 큰 금액 우선 계산
K원 보다 작은 돈으로 계산
나머지에 대한 연산
"""
N, K = map(int, input().split())
coins = [int(input()) for _ in range(N)]
coins.sort(reverse=True)

cnt = 0
for x in coins:
    if x <= K:
        cnt += K // x
        K %= x

print(cnt)

"""
1. N이 1이 될때까지 반복
2. 나머지가 0일때만 K로 나누고
3. 그 전까지는 1을 뺀다.
4. 횟수를 저장
"""

N, K = map(int, input().split())
cnt = 0

while True:
  if N % K == 0:
    N //= K
    cnt += 1
  else:
    N -= 1
    cnt += 1
  if N == 1:
    break

print(cnt)
N, M = map(int, input().split())

ret = 0

for i in range(N):
  data = list(map(int, input().split()))
  min_value = min(data)
  ret = max(ret, min_value)

print(ret)

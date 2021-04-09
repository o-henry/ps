n, m = map(int, input().split())

# 리스트의 행 (n) 만큼 반복을 한다.
# 해당 리스트(n) 의 열(m) 만큼 반복하여, 가장 작은 수를 출력한다.
# 모든 행에서 각 하나의 작은 수가 출력 되며,
# 이중 가장 큰 수를 return 한다.
# 2중 반복

result = 0

for i in range(n):
  data = list(map(int, input().split()))

  minimum = min(data)
  print('min', minimum)
  # if result < minimum:
  #   result = minimum
  result = max(result, minimum)

print('답 :', result)
"""
1. 2차원 배열을 2중 반복을 시행
2. 내부 배열을 정렬하고
3. [0]번째 값끼리 비교하여 가장 큰 값을 반환하면 된다.
"""
n, m = 3, 3
cards = [[3, 1, 2], [4, 1, 4], [2, 2, 2]]

scard = [sorted(x) for x in cards]

for x in cards:
  scard.append(sorted(x))

max = 0
for i in range(n):
  if scard[i][0] > max:
    max = scard[i][0]

print(max)



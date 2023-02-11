nums = [2, 4, 5, 4, 6]
n_n = sorted(nums, reverse=True)
p, m, k, ret = 0, 8, 3, 0
first, second = n_n[0], n_n[1]

while (p < m):
  for i in range(k):
    ret += first
    p += 1
  ret += second
  p += 1
print(ret)

"""
1. 총 M번 연산 한다.
2. 가장 큰수 부터 K번 사용한다.
3. 0, 1 번째 수만 사용한다.
4. 0번째가 K번 더해지면 1번째를 한번 더한다.
5. 합을 리턴한다.
"""

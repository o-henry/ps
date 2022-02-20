"""
(1 ≤ n ≤ 100000, 1 ≤ x ≤ 2000000)
ai + aj = x (1 ≤ i < j ≤ n)을 만족하는 (ai, aj)쌍의 수를 구하는 프로그램

해시

2개 선택 이기 때문에 해시가 가능
brute force 도 가능 하나 느릴것

12, 1
10, 3
2, 11
"""

n = int(input())
nums = list(map(int, input().split()))
x = int(input())

ret = 0
hash = dict()

for i, r in enumerate(nums):
    v = x - r

    if hash.get(v) is not None and hash[v] != i:
        ret += 1
    hash[r] = i

print(ret)

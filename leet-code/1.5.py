"""
순회 하면서 타겟 존재 여부를 확인한다.
존재하면 해당 인덱스를 반환한다.
존재하지 않는다면 타겟이 들어갈 위치에 인덱스를 반환한다.

순회한다
순회하면서 target의 값과 같거나 크다면 순회를 중단한다.
"""

n = [1, 4, 5, 6]
t, p = 3, 0

# for i in range(len(n)):
#     if n[i] == t:
#         print(i)
#         break
#     else:
#         p += 1
#         if n[p] > t:
#             print(p)
#             break

while p < len(n):
    if t <= n[p]:
        break
    p += 1
print(p)


# binary_search

l, h = 0, len(n) - 1

while l <= h:
    m = int((l + h) / 2)

    if t == n[m]:
        print(m)
        break
    if t > n[m]:
        l = m + 1
    else:
        h = m - 1
print('b_s', l)

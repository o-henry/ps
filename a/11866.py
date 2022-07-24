

# n, k = map(int, input().split())


# def solution(n, k):
#     q = deque(range(1, n + 1))
#     result = "<"
#     cnt = 0
#     while q:
#         cnt += 1
#         # k의 배수번째가 될때
#         if cnt % k == 0:
#             result += str(q.popleft()) + ", "
#         else:
#             q.append(q.popleft())

#     result = result[:-2] + ">"
#     print(result)


# solution(n, k)


# N, K = map(int, input().split())
# peo = [i for i in range(1, N + 1)]
# pt = 0
# ans = []
# for _ in range(N):
#     pt += K - 1
#     pt %= len(peo)
#     ans.append(peo.pop(pt))

# print(f"<{', '.join(map(str, ans))}>")

from collections import deque
N, K = map(int, input().split())

q = deque(range(1, N + 1))
p = 0
result = "<"

while q:
    p += 1
    if p != K:
        q.append(q.popleft())
    else:
        result += str(q.popleft()) + ", "
        p = 0

result = result[:-2] + ">"
print(result)

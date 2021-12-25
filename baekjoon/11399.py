N = int(input())
people = list(map(int, input().split()))

T = []
for x in enumerate(people):
    T.append(x)

T.sort(key=lambda x: (x[1], x[0]))


s, t = 0, 0

for i, v in enumerate(T):
    t += v[1]
    s += t

print(s)


# n = int(input())  # 사람 수
# arr = list(map(int, input().split()))  # 인출 시간
# arr.sort()  # 정렬

# result = 0

# for i in range(1, n):
#     arr[i] += arr[i-1]  # 인출 시간 갱신

# print(sum(arr))

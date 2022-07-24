N = int(input())
member = dict()
tmp = []

for _ in range(N):
    name, status = map(str, input().split())
    member[name] = status

for k, v in member.items():
    if v == 'enter':
        tmp.append(k)

ret = sorted(tmp, reverse=True)

for x in ret:
    print(x)


# import sys
# read = sys.stdin.readline

# d = {}
# for _ in range(int(read())):
#     name, action = read().split()
#     if action == 'enter':
#         d[name] = True
#     elif action == 'leave':
#         if name in d:
#             del d[name]
# print('\n'.join(sorted(d.keys(), reverse=True)))

E = 'CAMBRIDGE'
N = input()

ret = ''

for x in N:
    if x not in E:
        ret += x

print(ret)

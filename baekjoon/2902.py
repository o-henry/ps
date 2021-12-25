words = input()

ret = words[0]
for i in range(len(words) - 1):
    if words[i] == '-':
        ret += words[i+1]


print(ret)

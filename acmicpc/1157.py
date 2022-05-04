# from collections import Counter

# c = Counter(input().lower()).most_common()

# if len(c) == 1:
#     print(c[0][0].capitalize())

# for i in range(len(c) - 1):
#     if c[0][1] == c[1][1]:
#         print('?')
#         break
#     else:
#         print((c[0][0]).capitalize())
#         break


s = input().upper()
l = [s.count(chr(c)) for c in range(65, 91)]

print(l)

m = max(l)
if l.count(m) == 1:
    print(chr(l.index(m)+65))
else:
    print('?')

# 6253 
# 527389

s, e, k = map(int, input().split())
print(s, e, k)
number = [5,2,7,3,8,9]

temp = []
for i in range(len(number)):
    temp = number[s-1:e]
    temp.sort()
print(temp[k-1])


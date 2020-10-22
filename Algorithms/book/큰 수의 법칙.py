n, m, k = map(int, input().split())
data = list(map(int, input().split()))
# 2가지 조합으로 해결 가능

sum = 0
cnt = 1

data.sort()
operand_one = data[-1]
operand_two = data[-2]

while cnt <= m:
  if cnt%k == 0:
    print(sum)
    sum += operand_two
  else:
    sum += operand_one   
    print(sum)
  cnt+=1

print(sum)

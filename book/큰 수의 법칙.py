### GREEDY

# 나의 풀이
# 그리디를 사용해야 함을 짐작한 부분 -> 가장 큰 수를 만드는 법칙을 찾아야 한다. ( 최적의 해 )
# 정렬을 혼합한다.

# 해결을 위한 아이디어 '가장 큰 수 2가지로 해결할 수 있다'

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
    sum += operand_two
  else:
    sum += operand_one   
  cnt+=1

print(sum)


### 해설
# * 위 코드는 M의 크기가 커질수록 시간 초과가 일어나게 된다.
# ** 해설 에서는 규칙을 찾는것에 중점.

# 만약 m이 8, k가 3 이며 주어진 data가 [2, 4, 5 ,6] 이라고 할 경우,
# { 6 + 6 + 6 + 5 } { 6 + 6 + 6 + 5 } 의 반복되는 수열을 확인할 수 있다.
# int(M / (K+1)) * K + M % (K + 1)


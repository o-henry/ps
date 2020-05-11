# n = int(input())
# 1부터 n 까지 홀수 출력
# for i in range(1, n+1):
#     if i % 2 != 0:
#         print(i)

# 1 부터 n 까지의 합
# sum = 0
# for j in range(1, n+1):
#     sum += j
# print(sum)

# for k in range(1, n+1):
#     if n % k == 0:
#         print(k, end=' ')

# 이중 포문
# 별 찍기
# for i in range(5):
#     for j in range(5-i):
#         print('*', end=' ')
#     print()

# msg = "hello world"
# print(msg.upper())
# print(msg.lower())
# print('msg : ', msg)
# temp = msg.upper()
# print(temp.find('L')) # 맨 처음 일치하는 값의 인덱스를 반환합니다.
# print(temp.count('L'))
# print(msg[:2])
# print(len(msg))

# 아스키 넘버 ord

import random as r

def plus_one(x):
    return x + 1

a=[1, 2, 3]
print(list(map(plus_one, a)))

print(list(map(lambda x: x+1, a)))
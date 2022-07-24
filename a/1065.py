N = int(input())
cnt = 0

if N < 100:
    print(N)
else:
    for i in range(100, N + 1):
        x = str(i)
        if int(x[2]) - int(x[1]) == int(x[1]) - int(x[0]):
            cnt += 1

    print(99 + cnt)


# num = int(input())
# hansu = 0

# for n in range(1, num+1) :
#     if n <= 99 : # 1부터 99까지는 모두 한수
#         hansu += 1

#     else :
#         nums = list(map(int, str(n))) # 숫자를 자릿수대로 분리
#         if nums[0] - nums[1] == nums[1] - nums[2] : #등차수열 확인
#             hansu+=1

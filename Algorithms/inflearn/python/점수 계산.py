number = input()
count = 0
answer = 0

for x in range(len(number)):
    if(number[x] == '1'):
        count += 1
        answer += count
    else:
        count = 0

print(answer)

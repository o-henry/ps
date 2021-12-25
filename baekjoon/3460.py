T = int(input())

for _ in range(T):
    # 슬라이싱 0b 제거
    N = bin(int(input()))[2:]
    for i in range(len(N)):
        # 역순
        if N[-i-1] == '1':
            print(i, end=' ')

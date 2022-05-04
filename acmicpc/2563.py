"""
10 * 10 사이즈의 색종이
총 합 - 중첩 부분의 크기


0. (i, j), (k, l) 두 좌표 에서 같은 자리수 중 더 작은 수에 10을 더하고 뺀다
1. 중첩 여부 확인


"""

n = int(input())
paper = [list(map(int, input().split()))
         for _ in range(n)]

paper.sort(key=lambda x: x[0])

print('paper', paper)

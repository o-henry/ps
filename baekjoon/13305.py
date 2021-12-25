# i, i+1
# 다음 주유소 거리가 짧고, 다음 주유소 비용이 첫번째 주유소 비용보다 싸다면,
# 다음 주유소 위치 만큼 기름을 충전
# 제일 오른쪽은 무시한다
#  2 3 1 5
# 6 7 7 2 1
# flag x

N = int(input())
distance = list(map(int, input().split()))
price = list(map(int, input().split()))

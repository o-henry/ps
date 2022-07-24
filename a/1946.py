"""
우선 서류심사 기준 오름차순 정렬 후
면접 성적 기준 정렬 실행
"""

import sys

T = int(input())


for _ in range(T):
    ret = 1
    N = int(input())
    grades = sorted([list(map(int, sys.stdin.readline().split()))
                    for _ in range(N)], key=lambda x: x[0])

    m = grades[0][1]

    for i in range(N):
        if m > grades[i][1]:
            ret += 1
            m = grades[i][1]

    print(ret)

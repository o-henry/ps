A, B, V = map(int, input().split())


# 2,1,5 = 4
# 1 <= B <= A <= V <= 1_000_000_000
def solution():
    day = 0

    while A < V:
        V -= A + B
        day += 1

    day += 1

    return day

    """
        # 5 - 2 = 3 + 1 = 4 // 1
        4 - 2 + 1 = 3 // 2
        3 - 2 + 1 = 2 // 3      
        2 - 2 // 4
    """


print(solution())

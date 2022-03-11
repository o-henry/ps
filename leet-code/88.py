# two pointer
# len(m) > len(n)

"""
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
"""

m, n = [1, 2, 3, 0, 0, 0], [2, 5, 6]


def solution(m, n):
    mp, np = 0, 0
    for _ in range(len(m) - 1):
        if m[mp] > n[np]:
            m[mp] = n[np]
            np += 1
        elif m[mp] == n[np]:
            mp += 1
            m[mp] = n[np]
            np += 1
        else:
            mp += 1
    return m


print(solution(m, n))

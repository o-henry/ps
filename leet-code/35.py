
"""
타겟이 존재한다면 해당 타겟의 인덱스를 반환하시오
만약 존재하지 않는다면 들어갈 자리의 인덱스를 반환하세요.
target <= nums[i]
이진탐색
"""


def searchInsert(nums, target):

    l, r = 0, len(nums) - 1

    while l <= r:
        m = int((l + r) / 2)

        if target == nums[m]:
            return m
        elif target < nums[m]:
            r = m - 1
        else:
            l = m + 1
    return l


print(searchInsert([1, 3, 5, 6], 5))

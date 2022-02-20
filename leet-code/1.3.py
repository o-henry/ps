

"""
순회하며 특정 값을 찾는다 > 해시

목표값 - 현재요소 = 다른요소
해시 테이블에서 다른요소를 찾는다
만약 다른 요소가 해시테이블에 있다면 현재 요소의 인덱스와 해시 테이블의 값(인덱스)를 반환한다.
다른 요소가 없다면 현재 요소를 해시테이블의 키값으로 넣고 인덱스를 값으로 넣는다
"""


nums = [2, 7, 10, 19]
t = 29


def two_sum():
    for i in range(0, len(nums)):
        for j in range(i+1, len(nums)):
            if(nums[i] + nums[j]) is t:
                return [i, j]
    return [-1, -1]


ret = []


def sum_hash():
    hash = dict()

    for i, x in enumerate(nums):
        v = t - x
        if hash.get(v) is not None and hash[v] != i:
            print(sorted([i, hash[v]]))

        hash[x] = i

    return [-1, -1]


sum_hash()

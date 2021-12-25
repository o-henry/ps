# 이진 검색
# 이진검색 알고리즘은 배열이 정렬되어 있어야 한다. 선형검색보다 빠르다

from typing import Any, Sequence


def binary_search(list, item):
    low = 0
    high = len(list) - 1
    while low <= high:
        mid = (low + high) / 2
        guess = list[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None


arr = [1, 4, 5, 6, 8, 10, 100, 120]
print(binary_search(arr, 4))


def bin_search(a: Sequence, key: Any) -> int:
    left = 0
    right = len(a) - 1

    while True:
        center = (left + right) // 2
        if a[center] == key:
            return center
        elif a[center] < key:
            left = center + 1
        else:
            right = center - 1
        if left > right:
            break
    return -1

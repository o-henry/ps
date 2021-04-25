# 선형 탐색
# 선형 탐색은 무작위로 늘어놓은 데이터 집합에서의 검색을 수행한다.
# 선형으로 늘어선 배열에서 검색하는 경우 원하는 키값을 가진 원소를 찾을때 맨 앞 부터 스캔하여 순서대로 검색하는 알고리즘.
# 느리다

# 보초법
# 종료조건은 2가지 존재한다. 검색할 값을 찾은경우와, 찾지못하고 배열의 맨끝까지 돈 경우.
# 판단 조건을 줄이기 위해, 검색할 값을 주어진 배열 마지막 끝에 추가하여, 조건 판단 횟수를 줄인다.
from typing import Any, Sequence
import copy


def seq_search(seq: Sequence, key: Any) -> int:
    a = copy.deepcopy(seq)
    a.append(key)

    i = 0
    while True:
        if a[i] == key:
            break
        i += 1
    return -1 if i == len(seq) else i

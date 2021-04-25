# 검색, 데이터의 추가 삭제에도 효율적인 해시법
# 데이터를 저장할 위치 = 인덱스
# 나머지를 구하는 연산 또는 그 연산을 응용할 때 주로 사용

# 체인법으로 해시함수 구현
from __future__ import annotations
from typing import Any, Type
import hashlib


class Node:
    def __init__(self, key: Any, value: Any, next: Node) -> None:
        self.key = key
        self.value = value
        self.next = next


class ChainedHash:
    def __init__(self, capacity: int) -> None:
        self.capacity = capacity  # 해시테이블의 크기 지정
        self.table = [None] * self.capacity  # 해시테이블(리스트) 선언

    def hash_value(self, key: Any) -> int:
        if isinstance(key, int):
            return key % self.capacity
        return(int(hashlib.sha256(str(key).encode()).hexdigest(), 16) % self.capacity)

# Palindrome

# 회문문자, 앞으로 읽어도 뒤로 읽어도 같은 문장 이 되는 알고리즘

# * 주어진 조건
# ** 입력 타입 string
# ** 리스트로 치환

# 알고리즘
# * 앞, 뒤에서 비교한다.
# ** 원소 1개씩 각각 비교한다.
# * 순회

def isPalindrome(self, s: str) -> bool:
    strs = []
    for char in s:
        if char.isalnum():
            strs.append(char.lower())

    while len(strs) > 1:
        if strs.pop(0) != strs.pop():
            return False

    return True

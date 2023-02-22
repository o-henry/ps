# https://leetcode.com/problems/longest-palindrome/


"""
 TODO: find longest palindrome that can be built with those letters.
 대소문자를 구분해야 한다.
 1. 정렬
 * abccccdd
 ret = 0
 2. 2차원 배열
 3. 요소가 1개일 경우 추가하고 브레이크
 4. 요소가 짝수면 다 들어갈 수 있다.
"""


def solution(s):
  ret = 0

  hash = set()
  # for c in s:
  #   if c not in hash:
  #     hash.add(c)
  #   else:
  #     hash.remove(c)


print(solution(input()))

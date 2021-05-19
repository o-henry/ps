# 리스트의 순서를 아래 처럼 바꿔라

# ['h', 'e', 'l', 'l', 'o'] => ['o', 'l', 'l', 'e', 'h']

"""
* SWAP 
* Two Pointer Way
* left / right 

* use method like reverse()
"""

left, right = 0, len(s) - 1

while left <= right:
    s[left], s[right] = s[right], s[left]
    left += 1
    right -= 1

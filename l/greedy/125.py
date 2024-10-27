class Solution:
  def isPalindrome(self, s: str) -> bool:
      strs = []

      for char in s:
        if char.isalnum():
          strs.append(char.lower())
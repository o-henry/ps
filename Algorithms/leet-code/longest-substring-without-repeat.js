function lengthOfLongestSubstring(s) {
  let p = 1;
  let stack = [];
  let answer = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);

    console.log("before", stack, "after", s[p]);
    if (stack.includes(s[p])) {
      answer = stack.length;
      stack = [];
      p++;
    }
  }

  return answer;
}

console.log(lengthOfLongestSubstring("abcabcbb"));

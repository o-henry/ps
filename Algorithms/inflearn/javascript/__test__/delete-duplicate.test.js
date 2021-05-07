const solution = require("../delete-duplicate");

test("delete-duplicate", () => {
  expect(solution("ksekkset")).toBe("kset");
  expect(solution("aabddcccskkt")).toBe("abdcskt");
});

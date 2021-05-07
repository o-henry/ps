const solution = require("../minimum-value");

test("minimum-value", () => {
  const arr = [5, 3, 7, 11, 2, 5, 15, 17];
  expect(solution(arr)).toBe(2);
});

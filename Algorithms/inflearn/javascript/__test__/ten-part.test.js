const solution = require("../ten-part");

test("ten-part-system", () => {
  expect(solution(3, [25, 23, 11, 47, 53, 17, 33])).toBe(3);
  expect(solution(0, [12, 20, 54, 30, 87, 91, 30])).toBe(3);
});

const solution = require("../number-of-pencils");

test("number-of-pencils", () => {
  expect(solution(25)).toBe(3);
  expect(solution(24)).toBe(2);
});

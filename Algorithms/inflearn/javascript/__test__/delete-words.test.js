const solution = require("../delete-words");

test("delete-words", () => {
  expect(solution(["good", "time", "good", "time", "student"])).toEqual([
    "good",
    "time",
    "student",
  ]);
});

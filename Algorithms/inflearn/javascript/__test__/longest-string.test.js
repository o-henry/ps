const solution = require("../longest-string");

test("longest-string", () => {
  expect(solution(["teacher", "time", "student", "beautiful", "good"])).toBe(
    "beautiful"
  );
});

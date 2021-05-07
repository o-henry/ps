const solution = require("../seven-dwarf");

test("seven-dwarf", () => {
  expect(solution([20, 7, 23, 19, 10, 15, 25, 8, 13])).toEqual([
    20,
    7,
    23,
    19,
    10,
    8,
    13,
  ]);
});

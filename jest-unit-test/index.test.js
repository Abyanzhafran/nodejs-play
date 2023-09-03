const sum = require("./sum");
// const subs = require("./differentFunc");

test("Case #1", () => {
  expect(sum(2, 2)).toBe(4);
});

test("Case #2", () => {
  expect(sum(2, 4)).toBe(8);
});

test("Case #3", () => {
  expect(sum(4, 3)).toBe(12);
});

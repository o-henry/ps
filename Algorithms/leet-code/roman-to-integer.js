/**
 * q <- 0
 * if f(n) > f(n+1) then {
 *  q += f(n+1) - f(n)
 * }
 */

const romanToInt = (s) => {
  const r = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const v = s.split("").map((x) => r[x]);
  return v.reduceRight((a, c, i, arr) => (c < arr[i + 1] ? a - c : a + c));
};

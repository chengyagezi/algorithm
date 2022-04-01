/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x <= 1) {
    return x;
  }
  let i = 0;
  while (i * i < x) {
    i++;
  }
  return Math.abs(x - i * i) - Math.abs(x - (i - 1) - (i - 1)) >= 0 ? i - 1 : i;
};
// @lc code=end

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
  while (i * i <= x) {
    i++;
  }
  return i - 1;
};
// @lc code=end

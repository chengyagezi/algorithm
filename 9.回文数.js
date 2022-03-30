/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;
  let s = x.toString();
  let l = s.length;
  for (let i = 0; i < l / 2; i++) {
    if (s[i] !== s[l - i - 1]) return false;
  }
  return true;
};
// @lc code=end

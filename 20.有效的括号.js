/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let str = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  let tmp = [];
  let length = s.length;
  if ((length & 1) == 1) {
    return false;
  }
  for (let i = 0; i < length; i++) {
    if (s[i] in str) {
      tmp.push(s[i]);
    } else {
      if (str[tmp[tmp.length - 1]] == s[i]) {
        tmp.pop();
      } else {
        return false;
      }
    }
  }
  return tmp.length == 0;
};
// @lc code=end

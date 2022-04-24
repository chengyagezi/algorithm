/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  /* let length = s.length;
  for (let i = 0; i < length / 2; i++) {
    [s[i], s[length - i - 1]] = [s[length - i - 1], s[i]];
  }
  return s; */

  let left = 0,
    right = s.length - 1;
  while (left <= right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
};
// @lc code=end

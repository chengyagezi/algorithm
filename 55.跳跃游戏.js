/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let length = nums.length;
  if (length <= 1) {
    return true;
  }
  let n = 1;
  for (let i = 0; i < n && n < length; i++) {
    n = Math.max(nums[i] + i + 1, n);
  }
  return n >= nums.length;
};
// @lc code=end

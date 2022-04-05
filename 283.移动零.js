/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let fast = 0,
    slow = 0,
    n = nums.length;
  while (fast < n) {
    if (nums[fast] != 0) {
      let tmp = nums[slow];
      nums[slow] = nums[fast];
      nums[fast] = tmp;
      slow++;
    }
    fast++;
  }

  return nums;
};
// @lc code=end

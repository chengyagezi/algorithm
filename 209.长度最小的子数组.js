/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // 暴力解
 let length = nums.length;
  let maxLength = length + 1;
  for (let i = 0; i < length; i++) {
    let sum = nums[i];
    if (sum >= target) {
      return 1;
    }
    for (let j = i + 1; j < length; j++) {
      sum += nums[j];
      if (sum >= target) {
        flag = true;
        maxLength = maxLength < j - i + 1 ? maxLength : j - i + 1;
        continue;
      }
    }
  }
  return maxLength > length ? 0 : maxLength;
};
// @lc code=end

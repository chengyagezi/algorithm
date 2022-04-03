/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  /* let k = 0,
    n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k; */
  // 双指针
  if (nums.length == 0) {
    return 0;
  }
  let slow = 0,
    fast = 0;
  while (fast < nums.length) {
    if (nums[fast] != val) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};
// @lc code=end

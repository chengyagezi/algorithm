/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let k = right;
  let arr = Array(right);
  while (left <= right) {
    // 找到大的平方值，不断往中间找
    let l = nums[left] * nums[left];
    let r = nums[right] * nums[right];
    if (l < r) {
      arr[k] = r;
      right--;
    } else {
      arr[k] = l;
      left++;
    }
    k--;
  }
  return arr;
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root == null) return false;
  function travese(root, targetSum) {
    if (root.left == null && root.right == null) {
      if (root.val == targetSum) return true;
    }
    let left = false,
      right = false;
    if (root.left !== null) left = travese(root.left, targetSum - root.val);
    if (root.right !== null) right = travese(root.right, targetSum - root.val);
    return left || right;
  }
  return travese(root, targetSum);
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (root == null) return 0;
  let res = 0,
    queue = [root];

  while (queue.length) {
    let len = queue.length;
    while (len--) {
      let node = queue.shift();
      node.right && queue.push(node.right);
      if (node.left !== null) {
        queue.push(node.left);
        if (node.left.left == null && node.left.right == null) res += node.left.val;
      }
    }
  }
  return res;
};
// @lc code=end

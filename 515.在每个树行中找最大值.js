/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
 * @return {number[]}
 */
var largestValues = function (root) {
  if (root == null) return [];
  let res = [],
    queue = [root];
  while (queue.length > 0) {
    let len = queue.length;
    let tmp = queue[0].val;
    while (len > 0) {
      let node = queue.shift();
      if (node.val > tmp) {
        tmp = node.val;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      len--;
    }
    res.push(tmp);
  }

  return res;
};
// @lc code=end

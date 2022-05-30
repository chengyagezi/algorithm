/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root == null) return [];
  let queue = [root],
    res = [];
  while (queue.length) {
    let length = queue.length,
      tmp = [];
    while (length) {
      let node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      tmp.push(node.val);
      length--;
    }
    res.push(tmp);
  }
  return res;
};
// @lc code=end

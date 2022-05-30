/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
  if (root == null) {
    return [];
  }
  let tmp = [root],
    next = [];
  res = [];
  while (tmp.length > 0) {
    let length = tmp.length;
    res.push(tmp[length - 1].val);
    while (length > 0) {
      let node = tmp.shift();
      node.left && next.push(node.left);
      node.right && next.push(node.right);
      length--;
    }
    tmp = next;
    next = [];
  }
  return res;
};
// @lc code=end

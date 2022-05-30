/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
var levelOrderBottom = function (root) {
  if (root == null) return [];
  let res = [],
    tmp = [root];
  while (tmp.length) {
    let length = tmp.length;
    let tmpArray = [];
    while (length > 0) {
      let node = tmp.shift();
      node.left && tmp.push(node.left);
      node.right && tmp.push(node.right);
      tmpArray.push(node.val);
      length--;
    }
    res.unshift(tmpArray);
  }
  return res;
};
// @lc code=end

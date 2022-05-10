/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
/* var preorderTraversal = function (root) {
  // 递归解法
  let res = [];
  function travese(root) {
    if (root !== null) {
      res.push(root.val);
      travese(root.left);
      travese(root.right);
    }
  }
  travese(root);
  return res;
}; */
var preorderTraversal = function (root) {
  // 迭代算法
  let res = [];

  let stack = [root];
  while (stack.length) {
    let tmp = stack.pop();
    if (tmp !== null) {
      res.push(tmp.val);
      stack.push(tmp.right);
      stack.push(tmp.left);
    }
  }
  return res;
};
// @lc code=end

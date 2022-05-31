/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root == null) return [];
  let res = [],
    queue = [root];
  while (queue.length > 0) {
    let len = queue.length;
    let tmp = [];
    while (len > 0) {
      let node = queue.shift();
      tmp.push(node.val);
      queue.push(...node.children);
      len--;
    }
    res.push(tmp);
  }
  return res;
};
// @lc code=end

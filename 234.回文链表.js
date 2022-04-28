/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function (head) {
  // 翻转前半截  拿前半截与后半截对比
  let slow = (fast = head);
  let pre;

  while (fast && fast.next) {
    fast = fast.next.next;

    let next = slow.next;
    slow.next = pre;
    pre = slow;
    slow = next;
  }
  // 奇数节点
  if (fast) {
    slow = slow.next;
  }
  while (pre && slow) {
    if (pre.val !== slow.val) {
      return false;
    }
    pre = pre.next;
    slow = slow.next;
  }
  return true;
};
// @lc code=end

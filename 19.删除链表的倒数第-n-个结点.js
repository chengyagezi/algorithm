/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 暴力 算出全部节点数，然后数total-n

  // 双指针
  // fast 走n
  // 然后slow跟fast一起走
  // 相对静止，fast走到null slow就为倒数n

  let dummy = { next: head };
  let fast = (slow = dummy);
  while (n--) {
    fast = fast.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};
// @lc code=end

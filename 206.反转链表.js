/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head == null || head.next == null) {
		return head;
	}
	
	let prev = null;
	let next = head.next;
	
	//next 指向空时，只需再进行最后一次反转
	while (next != null) {
		
		//反转节点
		head.next = prev;
		
		//引用后移
		prev = head;
		head = next;
		next = next.next;
	
	}

	//反转最后一个节点
	head.next = prev;
	
	//返回反转后的链表头引用
	return head;
};
// @lc code=end

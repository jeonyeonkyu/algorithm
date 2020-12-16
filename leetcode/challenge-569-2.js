//https://leetcode.com/explore/challenge/card/december-leetcoding-challenge/569/week-1-december-1st-december-7th/3552/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.array = this.getArray(head);
};

/**
* Returns a random node's value.
* @return {number}
*/
Solution.prototype.getRandom = function () {
  return this.array[Math.floor(Math.random() * this.array.length)];
};

Solution.prototype.getArray = function (root, array = []) {
  if (!root) {
    return array;
  } else {
    array.push(root.val)
    Solution.prototype.getArray(root.next, array)
  }
  return array
}
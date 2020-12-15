//https://leetcode.com/explore/challenge/card/december-leetcoding-challenge/569/week-1-december-1st-december-7th/3551/
//이진 트리의 최대 깊이
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  const resultArray = [];
  const maxIndex = (root, index) => {
    index++;
    resultArray.push(index)
    if (root.right) {
      maxIndex(root.right, index);
    }
    if (root.left) {
      maxIndex(root.left, index);
    }
  }
  maxIndex(root, 0);
  return Math.max(...resultArray);
};
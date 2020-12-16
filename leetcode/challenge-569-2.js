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
var Solution = function(head) {    
  this.count = 0;
  this.head = head;
   this.array = [];
  if(this.head){
      this.array.push(this.head.val)
      this.count++;
      while(this.head.next){
         this.head = this.head.next;
          this.array.push(this.head.val)
          this.count++;
      }
  }
};

/**
* Returns a random node's value.
* @return {number}
*/
Solution.prototype.getRandom = function() {
  return this.array[Math.floor(Math.random()*this.count)];
};

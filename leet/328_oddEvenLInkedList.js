/**
홀수짝수 연결리스트

홀수짝수로 되어있는 단일 연결리스트를 정렬하기.
level : medium
 */
/**

var oddEvenList = function(head) {
    if(head ===null || head.next===null)  return head;
    let odd = head;
    let even = head.next; 
    let  evenHead  = even;
    
    while(even!==null && even.next!==null ){
        odd.next = even.next;
       odd = odd.next;
        even.next= odd.next;
        even = even.next
    }
    odd.next = evenHead
    return head
};
 */
var oddEvenList = function (head) {
  if (head === null || head.next === null) return head;
  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even !== null && even.next !== null) {
    odd.next = odd.next.next;
    odd = odd.next;
    even.next = even.next.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};

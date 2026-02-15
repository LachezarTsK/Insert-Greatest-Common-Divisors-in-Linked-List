
package main

func insertGreatestCommonDivisors(head *ListNode) *ListNode {

    var current *ListNode = head

    for current != nil {

        if current.Next != nil {
            greatestCommonDivisor := findGreatestCommonDivisor(current.Val, current.Next.Val)
            insertion := NewListNode(greatestCommonDivisor, current.Next)
            current.Next = insertion
            current = current.Next
        }
        current = current.Next
    }
    return head
}

func findGreatestCommonDivisor(larger int, smaller int) int {
    if smaller == 0 {
        return larger
    }
    return findGreatestCommonDivisor(smaller, larger % smaller)
}

/*
Struct ListNode is inbuilt in the solution file on leetcode.com. 
When running the code on the website, do not include this struct.
 */
type ListNode struct {
    Val  int
    Next *ListNode
}

func NewListNode(val int, next *ListNode) *ListNode {
    listNode := &ListNode{
        Val:  val,
        Next: next,
    }
    return listNode
}

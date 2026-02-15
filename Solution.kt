
class Solution {

    fun insertGreatestCommonDivisors(head: ListNode?): ListNode? {

        var current = head

        while (current != null) {

            if (current.next != null) {
                val greatestCommonDivisor = findGreatestCommonDivisor(current.`val`, current.next!!.`val`)
                val insertion = ListNode(greatestCommonDivisor)
                insertion.next = current.next
                current.next = insertion
                current = current.next
            }
            current = current!!.next
        }
        return head
    }

    private fun findGreatestCommonDivisor(larger: Int, smaller: Int): Int {
        if (smaller == 0) {
            return larger
        }
        return findGreatestCommonDivisor(smaller, larger % smaller)
    }
}

/*
Class ListNode is inbuilt in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class ListNode(var `val`: Int) {
    var next: ListNode? = null
}

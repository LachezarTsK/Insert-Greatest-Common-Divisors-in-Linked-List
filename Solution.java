
public class Solution {

    public ListNode insertGreatestCommonDivisors(ListNode head) {

        ListNode current = head;

        while (current != null) {

            if (current.next != null) {
                int greatestCommonDivisor = findGreatestCommonDivisor(current.val, current.next.val);
                ListNode insertion = new ListNode(greatestCommonDivisor, current.next);
                current.next = insertion;
                current = current.next;
            }
            current = current.next;
        }
        return head;
    }

    private static int findGreatestCommonDivisor(int larger, int smaller) {
        if (smaller == 0) {
            return larger;
        }
        return findGreatestCommonDivisor(smaller, larger % smaller);
    }
}

/*
Class ListNode is inbuilt in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class ListNode {

    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}

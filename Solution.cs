
using System;

public class Solution
{
    public ListNode InsertGreatestCommonDivisors(ListNode head)
    {
        ListNode current = head;

        while (current != null)
        {
            if (current.next != null)
            {
                int greatestCommonDivisor = FindGreatestCommonDivisor(current.val, current.next.val);
                ListNode insertion = new ListNode(greatestCommonDivisor, current.next);
                current.next = insertion;
                current = current.next;
            }
            current = current.next;
        }
        return head;
    }

    private static int FindGreatestCommonDivisor(int larger, int smaller)
    {
        if (smaller == 0)
        {
            return larger;
        }
        return FindGreatestCommonDivisor(smaller, larger % smaller);
    }
}

/*
Class ListNode is inbuilt in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
public class ListNode
{
    public int val;
    public ListNode next;
    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }
}


function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {

    let current = head;

    while (current !== null) {

        if (current.next !== null) {
            const greatestCommonDivisor = findGreatestCommonDivisor(current.val, current.next.val);
            const insertion = new ListNode(greatestCommonDivisor, current.next);
            current.next = insertion;
            current = current.next;
        }
        current = current.next;
    }
    return head;
};

function findGreatestCommonDivisor(larger: number, smaller: number): number {
    if (smaller === 0) {
        return larger;
    }
    return findGreatestCommonDivisor(smaller, larger % smaller);
}

/*
Class ListNode is inbuilt in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

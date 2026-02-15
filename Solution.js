
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {

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

/**
 * @param {number} larger
 * @param {number} smaller
 * @return {number}
 */
function findGreatestCommonDivisor(larger, smaller) {
    if (smaller === 0) {
        return larger;
    }
    return findGreatestCommonDivisor(smaller, larger % smaller);
}

/*
 Function ListNode is inbuilt in the solution file on leetcode.com. 
 When running the code on the website, do not include this function.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

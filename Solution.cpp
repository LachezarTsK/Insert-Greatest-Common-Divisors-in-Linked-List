
using namespace std;

/*
Struct ListNode is inbuilt in the solution file on leetcode.com. 
When running the code on the website, do not include this struct.
 */
struct ListNode {
    int val;
    ListNode* next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode* next) : val(x), next(next) {}
};

class Solution {

public:
    ListNode* insertGreatestCommonDivisors(ListNode* head) {

        ListNode* current = head;

        while (current != nullptr) {

            if (current->next != nullptr) {
                int greatestCommonDivisor = findGreatestCommonDivisor(current->val, current->next->val);
                ListNode* insertion = new ListNode(greatestCommonDivisor, current->next);
                current->next = insertion;
                current = current->next;
            }
            current = current->next;
        }
        return head;
    }

private:
    static int findGreatestCommonDivisor(int larger, int smaller) {
        if (smaller == 0) {
            return larger;
        }
        return findGreatestCommonDivisor(smaller, larger % smaller);
    }
};

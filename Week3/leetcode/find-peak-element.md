### https://leetcode.com/problems/find-peak-element/submissions/1656946790/

```java

class Solution {
    public int findPeakElement(int[] nums) {
        int n = nums.length;
        if(n == 1) return 0;
        int l = 0, h = n-1;
        while (l <= h){
            int m = l + (h-l)/2;

            if(m == 0) {
                if(nums[m] > nums[m+1]) {
                    return m;
                }else {
                    l = m+1;
                }
            }else if(m == n-1){
                if( nums[m-1] < nums[m] ){
                    return m;
                }else {
                    h = m-1;
                }
            }else {
                if( nums[m-1] < nums[m] && nums[m] > nums[m+1] ){
                    return m;
                }else if(nums[m+1] > nums[m] ) {
                    l = m+1;
                }else {
                    h = m-1;
                }
            }
        }
        return l;
    }
}
```

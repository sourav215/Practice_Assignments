### LeetCode: https://leetcode.com/problems/first-bad-version/submissions/1656943843/

```java
/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        int l = 1;
        int r = n;
        while(l<=r){
            int mid = l+(r-l)/2;
            if(isBadVersion(mid)==false){
                l = mid+1;
            }
            else if(isBadVersion(mid)==true){
                r = mid-1;
            }
        }
        return l;
    }
}
```

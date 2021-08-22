### Pseudocode
  ```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left


  ```

### Walkthrough 

The divide and conquer approuch.
Find array length and divide by 2 to figure out where to split on, slice the left and right side of array. If arrary length is greater than one, we continue splitting the array until we have many array with a length of one. Now we start to merge the arrays with a while loop. Make the remaining elements in the arrray equal to the remaining values on the left and right. Time O(logn) Space O(n) 


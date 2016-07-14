1. Is there a particular arrangement of data that the naive version of quickSort (where the pivot is always on the right) might have trouble sorting?
- Sorted or inversely sorted data.
2. Why is the naive quick sort so slow for inversely sorted data?
- Because since it sets the right element as the pivot, after partioning, it ends up with one set of only 1 element, and another set with N-1 elements.
3. What is median-of-three partitioning?
- A way of determining the pivot by comparing the first, middle, and last elements of the array, partioning them, and selecting the middle as the pivot.
4. Name three ways, besides quicksort, to sort small partitions.
- Manually using a for loop, Insertion sort for small partitions, or using quick sort to partially sort the set then apply insetion sort to fully sort the set.
5. Which is the best system?
- Loop or Insertion sort.
6. If you use median-of-three partitioning, why can’t you use quicksort to sort very small partitions?
- Median of three requires at least 4 elements to work.
7. What is an easy but tedious way to measure the efficiency of the quick sort algorithm, using the Workshop applet?
- Measuring each partition with a ruler.

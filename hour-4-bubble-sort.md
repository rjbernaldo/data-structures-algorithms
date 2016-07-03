1. Describe the algorithm for carrying out the bubble sort.
- Compare current element and the element next to it, swap them if the first element is bigger, move to next element. This will "bubble up" the largest elements to the end of the array. You should then repeat the entire process for all the elements in the array minus the last element that has already been sorted.
2. What’s an invariant?
- A constant rule or condition. Example, for bubble sort, the invariant is that all elements to the right of the "sorted length" should already be ordered.
3. Why is the bubble sort so slow?
- Because the algorithm needs to go through the data set N * N times (loop within a loop.)
4. How many comparisons does a bubble sort perform in sorting N items?
- N * (N - 1)/2
5. In the bubbleSort.cpp program, why is the bubbleSort() function a member
function of a class?
- It is an algorithm that can be applied to the class Array.

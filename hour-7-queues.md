1. Give a one-sentence description of how a queue works.
- Accessing items one by on in a FIFO order.
2. In the C++ code for a queue, when you insert an item, which do you do first: insert the item, increment Rear, or check whether Rear is at the end of the array?
- check, increment, insert
3. Why is wrap around necessary for (at least some implementations of) queues but not for stacks?
- Because it can reach the end of the data structure. For stacks, elements get added and removed from one end of the set, while for queues, they get added on one end and removed from the other.
4. What does it mean when we say the remove() member function for a queue “assumes” the queue is not empty?
- It means it executes removal of item right away without checking if there is even an item to remove.
5. What’s the difference between a queue and a priority queue?
- A priority queue has its set of elements ordered
6. Why is wrap around necessary in priority queues?
- It isnt used in priority queues
7. True or false: Assuming array implementations, insertion and deletion in queues and priority queues operate in O(1) time.
- True for queues but it takes O(N) time for priority queue.

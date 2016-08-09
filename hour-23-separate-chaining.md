1. When a collision occurs in separate chaining, how is an open array cell located?
- The new item is inserted in the next empty spot in the cells linked list.
2. In separate chaining, how do you access an item with a given key?
- Use the key inside the hashing function to determine the index, then traverse the linked list on that cell.
3. True or false: Unsorted lists must be used in separate chaining.
- False. Both types of lists can be used in separate chaining.
4. If there are N items in a hash table that uses separate chaining, and an average of M items on each list, how long does it take, on average, to find a particular item?
- 1 + M / 2
5. What is a bucket?
- An array used in the place of a linked list in separate chaining.
6. In separate chaining with unsorted lists, which is faster, a successful search or an unsuccessful search?
- Successful search will be faster because it will only visit M/2 items on a list with M length.
7. True or false: The efficiency of separate chaining degrades rapidly as the loadfactor approaches 1.
- False.

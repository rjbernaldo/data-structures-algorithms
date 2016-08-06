1) Why do we need quadtratic probing and double hashing?
- Because clustering is a huge problem with linear probing.
2) What determines the step size in quadtratic probing?
- Step count (or step * step.)
3) What determines the step size in double hashing
- A secondary hash function derived from the length of the array and the current item's key (or index.)
4) What's the disadvantage of quadtratic probing (compared with double hashing)
- Different items that map to the same index will result in a secondary cluster.
5) Why should the table size be a prime number when double hasing is used?
- In order to visit every element (eventually.) If it wasn't a prime number, it would result in the same numbers over and over again.
6) What is the load factor of a hash table?
- It is the ratio of the number of items to the array length. It should Ideally be 1/2, at the most 2/3.
7) What are the main disadvantages of all the open addressing schemes?
- Eventual clustering. As load increases, probes increase exponentially.

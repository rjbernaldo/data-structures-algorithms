1. What is hashing?
- Converting a key value to an array (of smaller size) index.
2. What is a collision?
- When you hash a key value but the cell in the resulting index already contains an element.
3. What is open addressing?
- A way to tackle collisions (by finding another cell to insert the current item into.)
4. What is linear probing?
- Upon collision, find the nearest empty cell (+1 steps) to insert the current elemt.
5. What is clustering?
- This happens when a certain sequence of cells that have already been filled grow bigger in length.
6. True or false: Clustering is a problem with linear probing.
- True.
7. True or false: When using linear probing, it’s common to fill an array almost full.
- False.

1. Why is a balanced tree desirable?
- An unbalanced tree is just like a linked-list. The benefits of using a tree (quick search and insertion) are lost if the tree is unbalanced.
2. How is the tree kept balanced?
- The tree is rotated.
3. How do the red-black algorithms know what rotations to perform?
- When red-black rules are violated.
4. What is black height?
- Height of black nodes.
5. Name the red-black rules.
- Every node is red or black, root is always black, if a node is red, its children must be black, every path from the root to any leaf must have the same black height.
6. What actions can the red-black algorithms perform to keep a tree balanced?
- Changing node colors and rotations.
7. In what ways can the colors of nodes be changed?
- Switching colors of parents and children, we can also switch the colors of individual nodes.
8. True or false: During a rotation, an entire subtree can be unattached from its parent and reattached to another node.
- True.

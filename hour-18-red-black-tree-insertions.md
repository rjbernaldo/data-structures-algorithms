1. During what operations are color changes and rotations applied? 
- Insertion, deletion.
2. What is the principle way a red-black tree is balanced?
- By color swapping then rotating.
3. What is the purpose of the color rules?
- To make sure the tree is balanced.
4. What is a color flip?
- Swapping a node and its childrens color.
5. What is a rotation?
- Moving nodes to either the left or the right.
6. What’s an inside grandchild?
- A child node on the left or on the right of a parent where its grandparent is in the same left or right position.
7. Briefly describe the insertion process in red-black trees.
- Constantly perform color swaps and rotations before and after you insert a node.
8. What do you do when Rule 3 (a parent and its child can’t both be red) is violated?
- Color swap and/or rotate.
9. How do you know whether to perform a single rotation or a double rotation?
- You perform a single rotation for an outside grandchild and a double for an inside grandchild.

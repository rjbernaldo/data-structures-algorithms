1. True or false: In a multiway tree, each node can have more than two children. 
- True.
2. What is the maximum number of data items per node in a 2-3-4 tree?
- Three data items.
3. When should a node be split?
- Whenever it encounters a full node on the way down on insertion.
4. What happens when a node (other than the root) is split?
- Given a full node, second item moves to become a parent of current node, and the third item becomes a new child node of this parent.
5. If a node is split (assuming it’s not the root) what is the increase in the number of levels in the tree?
- None.
6. What happens when the root is split?
- Same as #4 but the second items node becomes the new root.
7. True or false: Sometimes a node split results in additional node splits in nodes farther up the tree.
- False.
8. What keeps a 2-3-4 tree balanced?
- Constant splitting.

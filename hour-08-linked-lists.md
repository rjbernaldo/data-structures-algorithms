1. What one piece of data must be included in a link class?
- pNext - a link to the next link in the set
2. What one piece of data must be included in a linked list class?
- pFirst - a link to the first link in the set
3. Deleting a link from a linked list involves only one change in the list’s structure. What is it?
- setting previous.pNext to current.pNext
4. How do you get from the current link to the next link?
- by accessing the pNext
5. What task must be carried out by both the find(int key) and remove(int key) member functions?
- traverse the list by going through pNexts and check if current is the int key
6. How many objects of the linked list class are normally used to implement a linked list?
- one
7. What task should be carried out by the destructor of a linked list class in a C++ program?
- delete all links to prevent memory leak

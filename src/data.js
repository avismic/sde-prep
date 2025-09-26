export const initialData = {
  "Data Structures & Algorithms (DSA)": [
    { text: "Reverse a linked list", difficulty: "Easy" },
    { text: "Find the middle of a linked list", difficulty: "Easy" },
    { text: "Detect a cycle in a linked list", difficulty: "Medium" },
    { text: "Check for balanced parentheses", difficulty: "Easy" },
    { text: "Implement a queue using two stacks", difficulty: "Medium" },
    { text: "Find the height of a binary tree", difficulty: "Easy" },
    {
      text: "Perform a level order traversal of a binary tree",
      difficulty: "Medium",
    },
    {
      text: "Check if a binary tree is a Binary Search Tree (BST)",
      difficulty: "Medium",
    },
    { text: "Find the lowest common ancestor in a BST", difficulty: "Medium" },
    { text: "Sort an array of 0s, 1s, and 2s", difficulty: "Easy" },
    { text: "Find the kth smallest element in an array", difficulty: "Medium" },
    {
      text: "Kadane's algorithm for maximum subarray sum",
      difficulty: "Medium",
    },
    { text: "Two Sum problem", difficulty: "Easy" },
    { text: "Longest common subsequence", difficulty: "Hard" },
    { text: "Implement a stack using an array", difficulty: "Easy" },
    { text: "Check if a string is a palindrome", difficulty: "Easy" },
    { text: "Find all duplicates in an array", difficulty: "Medium" },
    { text: "Merge two sorted arrays", difficulty: "Easy" },
    { text: "Binary search algorithm", difficulty: "Easy" },
    { text: "Depth First Search (DFS) for a graph", difficulty: "Medium" },
    { text: "Breadth First Search (BFS) for a graph", difficulty: "Medium" },
    { text: "Implement a Trie", difficulty: "Hard" },
    { text: "Find the number of islands in a grid", difficulty: "Hard" },
    { text: "Longest increasing subsequence", difficulty: "Hard" },
    { text: "Egg dropping puzzle", difficulty: "Hard" },
  ],
  "Database Management System (DBMS)": [
    {
      text: "What is the difference between DBMS and RDBMS?",
      difficulty: "Easy",
    },
    {
      text: "Explain the difference between a PRIMARY KEY, UNIQUE KEY, and FOREIGN KEY.",
      difficulty: "Easy",
    },
    { text: "What is a composite key?", difficulty: "Easy" },
    {
      text: "What is the significant difference between `DELETE`, `TRUNCATE`, and `DROP` commands?",
      difficulty: "Medium",
    },
    {
      text: "What is a View in SQL? What are its main advantages?",
      difficulty: "Medium",
    },
    {
      text: "Explain DDL, DML, DCL, and TCL commands with examples.",
      difficulty: "Easy",
    },
    {
      text: "What is a stored procedure and how does it differ from a function?",
      difficulty: "Medium",
    },
    {
      text: "What is the difference between UNION and UNION ALL?",
      difficulty: "Easy",
    },
    {
      text: "What is normalization? Why is it essential in database design?",
      difficulty: "Easy",
    },
    {
      text: "Explain the different normal forms (1NF, 2NF, 3NF, BCNF) with simple examples.",
      difficulty: "Medium",
    },
    {
      text: "What is denormalization, and when would you intentionally use it?",
      difficulty: "Medium",
    },
    {
      text: "Given a table with specific columns and dependencies, identify its current normal form and normalize it to 3NF or BCNF.",
      difficulty: "Hard",
    },
    {
      text: "Design a database schema for a simple Library Management System or a Food Delivery App.",
      difficulty: "Hard",
    },
    {
      text: "What are the ACID properties in a DBMS? Explain each property (Atomicity, Consistency, Isolation, Durability).",
      difficulty: "Medium",
    },
    { text: "What is a transaction?", difficulty: "Easy" },
    {
      text: "Explain different concurrency problems like Dirty Read, Lost Update, and Phantom Read.",
      difficulty: "Hard",
    },
    {
      text: "What are the different transaction isolation levels? Explain how they prevent concurrency problems.",
      difficulty: "Hard",
    },
    {
      text: "What is a deadlock? How can you prevent or resolve it?",
      difficulty: "Medium",
    },
    {
      text: "What is an index? What are its advantages and disadvantages?",
      difficulty: "Easy",
    },
    {
      text: "Explain the difference between a clustered and a non-clustered index.",
      difficulty: "Medium",
    },
    {
      text: "How would you go about optimizing a slow-running SQL query? What is the role of the `EXPLAIN` plan?",
      difficulty: "Hard",
    },
    {
      text: "What are database partitioning and sharding? When would you use them?",
      difficulty: "Hard",
    },
    {
      text: "Write an SQL query to find the Nth highest salary from an employee table. A common follow-up is to do it without using `LIMIT` or `TOP`.",
      difficulty: "Hard",
    },
    {
      text: "Write a query to find employees who earn more than their managers.",
      difficulty: "Hard",
    },
    {
      text: "How do you find duplicate rows (e.g., duplicate emails) in a table?",
      difficulty: "Medium",
    },
    {
      text: "Explain the different types of JOINs (`INNER`, `LEFT`, `RIGHT`, `FULL OUTER`) and provide a use case for each.",
      difficulty: "Medium",
    },
    {
      text: "What is a self-join? Write a query using a self-join.",
      difficulty: "Medium",
    },
    {
      text: "Write a query to find all departments that have more than 'X' employees.",
      difficulty: "Medium",
    },
    {
      text: "Write a query to find employees who do not belong to any department.",
      difficulty: "Easy",
    },
    {
      text: "What are the main differences between SQL and NoSQL databases?",
      difficulty: "Medium",
    },
    {
      text: "Provide a scenario where you would prefer using a NoSQL database (like MongoDB) over a traditional RDBMS (like MySQL).",
      difficulty: "Medium",
    },
  ],
  "Object-Oriented Programming (OOPs)": [
    { text: "What are the four main pillars of OOPs?", difficulty: "Easy" },
    {
      text: "Explain Encapsulation with a real-world example.",
      difficulty: "Easy",
    },
    {
      text: "What is Abstraction and how is it different from Encapsulation?",
      difficulty: "Medium",
    },
    {
      text: "Explain Inheritance and its different types (single, multiple, multi-level, hierarchical).",
      difficulty: "Medium",
    },
    {
      text: "What is the diamond problem in multiple inheritance and how is it solved in languages like Java or C++?",
      difficulty: "Hard",
    },
    { text: "Explain Polymorphism. What are its types?", difficulty: "Easy" },
    {
      text: "What is the difference between method overriding and method overloading (compile-time vs. runtime polymorphism)?",
      difficulty: "Medium",
    },
    { text: "What is a class and what is an object?", difficulty: "Easy" },
    { text: "What is a constructor? What are its types?", difficulty: "Easy" },
    {
      text: "Can a constructor be private? If so, what is the use case?",
      difficulty: "Hard",
    },
    {
      text: "What is the difference between a `class` and a `struct`?",
      difficulty: "Medium",
    },
    {
      text: "What are `access modifiers` (public, private, protected)?",
      difficulty: "Easy",
    },
    {
      text: "What is a `virtual` function and what is its purpose?",
      difficulty: "Medium",
    },
    {
      text: "Explain the concept of a pure virtual function and an abstract class.",
      difficulty: "Medium",
    },
    {
      text: "What is the difference between an `abstract class` and an `interface`?",
      difficulty: "Medium",
    },
    {
      text: "What is `composition` over `inheritance`? When would you prefer one over the other?",
      difficulty: "Hard",
    },
    {
      text: "What is the `static` keyword used for in classes and methods?",
      difficulty: "Easy",
    },
    {
      text: "Explain the concept of `friend` classes and `friend` functions in C++.",
      difficulty: "Hard",
    },
    { text: "What is `exception handling` in OOPs?", difficulty: "Easy" },
    {
      text: "What is the difference between `shallow copy` and `deep copy`?",
      difficulty: "Medium",
    },
    {
      text: "What are the SOLID principles? Can you explain one of them (e.g., Single Responsibility Principle)?",
      difficulty: "Hard",
    },
    {
      text: "What are Design Patterns? Give an example of a pattern you have used.",
      difficulty: "Medium",
    },
    {
      text: "Explain the Singleton design pattern. What are its potential drawbacks?",
      difficulty: "Hard",
    },
    {
      text: "What is the difference between Factory and Abstract Factory design patterns?",
      difficulty: "Hard",
    },
    {
      text: "What is coupling and cohesion? Why is 'high cohesion, low coupling' desirable in software design?",
      difficulty: "Medium",
    },
  ],
  "Operating System & Networks": [
    {
      text: "What is an Operating System? Explain its main functions.",
      difficulty: "Easy",
    },
    {
      text: "What is the difference between a process and a thread?",
      difficulty: "Easy",
    },
    { text: "Explain the process life cycle.", difficulty: "Easy" },
    { text: "What is context switching?", difficulty: "Medium" },
    {
      text: "What are different CPU scheduling algorithms? (e.g., FCFS, SJF, Round Robin)",
      difficulty: "Medium",
    },
    {
      text: "What is a deadlock? What are the four necessary conditions for a deadlock?",
      difficulty: "Medium",
    },
    { text: "How can you prevent or avoid deadlocks?", difficulty: "Hard" },
    {
      text: "What is the difference between a mutex and a semaphore?",
      difficulty: "Medium",
    },
    {
      text: "What is virtual memory? Explain the concept of paging and segmentation.",
      difficulty: "Hard",
    },
    {
      text: "What is thrashing in the context of memory management?",
      difficulty: "Hard",
    },
    {
      text: "Explain the difference between logical and physical address space.",
      difficulty: "Easy",
    },
    { text: "What are system calls?", difficulty: "Easy" },
    {
      text: "What is the OSI model? Name its seven layers.",
      difficulty: "Easy",
    },
    {
      text: "Explain the difference between the OSI and TCP/IP models.",
      difficulty: "Medium",
    },
    {
      text: "What is the difference between TCP and UDP?",
      difficulty: "Medium",
    },
    {
      text: "Explain the TCP three-way handshake process.",
      difficulty: "Medium",
    },
    {
      text: "What is DNS (Domain Name System)? How does it work?",
      difficulty: "Medium",
    },
    {
      text: "What is the difference between HTTP and HTTPS?",
      difficulty: "Easy",
    },
    {
      text: "What happens when you type 'google.com' into your browser and press Enter?",
      difficulty: "Hard",
    },
    {
      text: "What is an IP address? Differentiate between IPv4 and IPv6.",
      difficulty: "Easy",
    },
    { text: "What are public and private IP addresses?", difficulty: "Easy" },
    { text: "What is a subnet mask?", difficulty: "Medium" },
    { text: "Explain what a firewall does.", difficulty: "Easy" },
  ],
};

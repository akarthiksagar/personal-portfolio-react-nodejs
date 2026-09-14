const projectData = [
  {
    id: 'redis-core',
    title: 'RedisCore',
    category: 'Systems / C++',
    github: 'https://github.com/akarthiksagar/Redis-Clone',
    description: 'A high-performance, Redis-compatible in-memory key-value store built entirely from scratch in C++.',
    keypoints: [
      'Engineered a non-blocking epoll event loop to handle concurrent client connections on a single thread.',
      'Implemented a custom RESP (Redis Serialization Protocol) parser.',
      'Achieved high throughput with zero locking overhead.'
    ],
    tech: ['C++', 'epoll', 'POSIX Sockets', 'RESP'],
    isClone: false,
    readme: `
## Overview
RedisCore is a high-performance, Redis-compatible in-memory key-value store engineered entirely from scratch in C++. It is designed to maximize throughput and minimize latency without relying on external libraries for its core architecture.

## Technical Implementation
* **Concurrency Model:** Utilizes a non-blocking \`epoll\` event loop to efficiently handle concurrent client connections on a single thread.
* **Protocol Parsing:** Features a custom implementation of the RESP (Redis Serialization Protocol) parser to communicate seamlessly with standard Redis clients.
* **Performance:** Engineered for high throughput with zero locking overhead, strictly utilizing POSIX Sockets for low-level network communication.
    `
  },
  {
    id: 'fediverse',
    title: 'Fedverse',
    category: 'Full-Stack Web',
    github: 'https://github.com/akarthiksagar/Decentralised-Social-Network-Fediverse',
    description: 'A decentralized federated social network built on the W3C ActivityPub protocol, interoperable with Mastodon.',
    keypoints: [
      'Built RSA key-pair generation and HTTP Signature verification for secure server-to-server federation.',
      'Designed async message delivery using BullMQ and Redis.',
      'Developed a React interface with infinite-scroll and cross-instance search capabilities.'
    ],
    tech: ['Node.js', 'React', 'PostgreSQL', 'Redis'],
    isClone: false,
    readme: `
## Overview
Fedverse is a fully decentralized federated social network. Built upon the W3C ActivityPub protocol, it achieves seamless interoperability with established federated platforms like Mastodon.

## System Architecture
* **Frontend Experience:** A highly responsive React SPA featuring infinite-scrolling feeds and cross-instance semantic search capabilities.
* **Backend Infrastructure:** Powered by a Node.js and PostgreSQL core, ensuring scalable data persistence.
* **Asynchronous Processing:** Relies on BullMQ and Redis to manage robust, asynchronous message delivery queues across instances.
* **Federation Security:** Implements rigorous server-to-server security protocols, including automated RSA key-pair generation and strict HTTP Signature verification.
    `
  },
  {
    id: 'ai-secure-compiler',
    title: 'AI Secure Compiler',
    category: 'AI & Security',
    github: 'https://github.com/akarthiksagar/Capstone-AI_BASED_SECURE_COMPILER_ASSISTANT.git',
    description: 'Designed a secure-by-construction compiler with AI-driven security intelligence to prevent vulnerabilities during the compilation pipeline.',
    keypoints: [
      'Utilized ANTLR for robust lexical analysis and parsing to construct the Abstract Syntax Tree.',
      'Integrated an AI-driven intelligence layer to detect and mitigate unsafe code patterns and memory vulnerabilities early.',
      'Leveraged the LLVM compiler infrastructure framework to generate highly optimized, secure target code.'
    ],
    tech: ['ANTLR', 'LLVM', 'AI / ML', 'C++'],
    isClone: false,
    readme: `
## Overview
The AI Secure Compiler is a capstone project focused on secure-by-construction design principles. It integrates advanced AI-driven security intelligence directly into the compilation pipeline to preemptively identify and neutralize memory vulnerabilities and unsafe code patterns before execution.

## Core Objectives & Pipeline
* **Lexical Analysis & Parsing:** Utilizes **ANTLR** to perform robust lexical analysis, accurately constructing the Abstract Syntax Tree (AST) from source code.
* **AI Security Intelligence:** Introduces an intelligent middleware layer that scans the intermediate representation to detect potential exploitation vectors and mitigate unsafe patterns.
* **Code Generation:** Leverages the **LLVM** compiler infrastructure to synthesize the heavily analyzed code into highly optimized, secure target machine code.
    `
  }
];

module.exports = projectData;
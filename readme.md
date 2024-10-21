# Building a Simple Redis Store with Node.js

This project demonstrates how to build a simple in-memory key-value store using Node.js. The store supports basic Redis-like commands such as `SET`, `GET`, and `DELETE`.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- `npm` (Node Package Manager) installed

### Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install the dependencies by running:

    ```sh
    npm install
    ```

### Running the Server

To start the server, run the following command:

```sh
npm start
```

The server will start and listen on port 3001.

**Connecting to the Server**
You can use telnet to connect to the server and issue commands. Open a terminal and run:
```sh
telnet localhost 3001
```

**Supported Commands**
* SET key value: Sets the value for the specified key.
* GET key: Retrieves the value for the specified key.
* DELETE key: Deletes the specified key.

**Example Usage**
```sh
telnet localhost 3001
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
SET mykey myvalue
>> OK
GET mykey
>> myvalue
DELETE mykey
>> OK
GET mykey
>> NULL
```
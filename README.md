# Decodelabs_project2
# Simple Backend API

A beginner-friendly backend API project built using Node.js and Express.js.

## Features

- Backend server setup
- GET API endpoint
- User input validation
- JSON responses
- Express.js routing
- REST API basics
- 
## Technologies Used

- Node.js
- Express.js
- VS Code
- Git & GitHub

## Installation

Clone the repository:

- git clone https://github.com/doodiharika21-cmd/Decodelabs_project2.git


Move into project folder:

- cd Decodelabs_project2


Install dependencies:

npm install

## Run the Server

node server.js

Server will start at:

http://localhost:3000

## API Endpoints

### Home Route

GET /

Response:

Backend Running

### User Validation Route

```http
GET /users
```

Example:

http://localhost:3000/users?name=Harikal&email=doodiharika21@gmail.com&age=21

## Validation Features

- Required field validation
- Email format validation
- Minimum name length validation
- Age validation

## Example Success Response

```json
{
  "success": true,
  "message": "Validation successful",
  "user": {
    "name": "Harika",
    "email": "doodiharika21@gmail.com",
    "age": "21"
  }
}

## Example Error Response

```json
{
  "success": false,
  "message": "All fields are required"
}

## GitHub Repository

https://github.com/doodiharika21-cmd/Decodelabs_project2

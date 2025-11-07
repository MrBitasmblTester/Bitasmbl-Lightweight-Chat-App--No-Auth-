# Bitasmbl-Lightweight-Chat-App-(No-Auth)

Build a web application that allows users to join anonymous chatrooms and exchange messages in real-time using WebSockets. The focus is on fast communication, simple interface, and responsive updates without requiring user registration.

## Tech Stack
- FastAPI (API)
- React (Front-End)
- Socket.IO (WebSocket)

## Requirements
- Allow users to join chatrooms without authentication
- Send and receive messages in real-time using WebSockets
- Display messages with timestamps and anonymous user identifiers
- Handle multiple chatrooms simultaneously
- Gracefully handle disconnected users and reconnections

## Installation

1. Clone the repository

   bash
   git clone https://github.com/MrBitasmblTester/Bitasmbl-Lightweight-Chat-App-(No-Auth).git
   cd Bitasmbl-Lightweight-Chat-App-(No-Auth)
   

2. Setup and start the backend (FastAPI + Socket.IO)

   bash
   # Create and activate a virtual environment
   python3 -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate

   # Install dependencies
   pip install --upgrade pip
   pip install fastapi uvicorn python-socketio[asyncio] python-dotenv

   # Create a .env file in the project root with:
   # FASTAPI_HOST=0.0.0.0
   # FASTAPI_PORT=8000
   touch .env
   echo "FASTAPI_HOST=0.0.0.0" >> .env
   echo "FASTAPI_PORT=8000" >> .env
   

3. Setup and start the frontend (React + Socket.IO)

   bash
   cd client
   npm install

   # Create .env.local for React
   # REACT_APP_BACKEND_URL=http://localhost:8000
   touch .env.local
   echo "REACT_APP_BACKEND_URL=http://localhost:8000" >> .env.local
   

## Usage

1. Start the backend server (from project root):

   bash
   uvicorn app.main:app --host $FASTAPI_HOST --port $FASTAPI_PORT
   

2. Start the React development server (in client/):

   bash
   npm start
   

3. Open your browser and navigate to http://localhost:3000
4. Enter a chatroom name and join anonymously. Send and receive messages in real-time.

## Implementation Steps

1. Initialize FastAPI project and install dependencies for WebSocket support using Socket.IO.
2. Create a Socket.IO server instance in FastAPI and define event handlers for `connect`, `join_room`, `message`, and `disconnect` events.
3. Load host and port configuration from `.env` using python-dotenv.
4. Scaffold React app in `client/` directory and install `socket.io-client` for WebSocket communication.
5. Implement a simple UI that prompts for a chatroom name, connects to the Socket.IO namespace, and displays messages with timestamps and anonymous IDs.
6. Handle room join logic on both client and server sides, emitting and listening to events appropriately.
7. Manage reconnections and cleanup on disconnect to ensure graceful recovery.
8. Test multiple chatrooms in different browser windows or tabs to verify isolation and real-time updates.

## API Endpoints

- WebSocket Endpoint (Socket.IO namespace):
  ws://<BACKEND_URL>/socket.io/

  Events:
  - `join_room`: payload `{ room: string }`
  - `message`: payload `{ room: string, content: string }`
  - `disconnect`: automatic on client disconnect
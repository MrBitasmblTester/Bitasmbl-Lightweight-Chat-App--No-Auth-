from fastapi import FastAPI
import socketio

sio = socketio.AsyncServer(async_mode='asgi')
app = FastAPI()
# mount socket.io ASGI
app.mount('/', socketio.ASGIApp(sio, app))
# import event handlers
import app.chat

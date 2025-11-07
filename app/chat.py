from app.main import sio

@sio.event
def connect(sid, environ):
    print('Client connected:', sid)

@sio.event
def join(sid, data):
    room = data['room']
    sio.enter_room(sid, room)
    sio.emit('status', {'msg': f'Joined {room}'}, room=room)

@sio.event
def message(sid, data):
    sio.emit('message', {'sid': sid, 'msg': data['msg'], 'timestamp': data.get('timestamp')}, room=data['room'])

@sio.event
def disconnect(sid):
    print('Client disconnected:', sid)

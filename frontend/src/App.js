import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
const socket=io('http://localhost:8000');
export default function App(){
 const [room,setRoom]=useState(''); const [msg,setMsg]=useState(''); const [chat,setChat]=useState([]);
 useEffect(()=>{socket.on('message',d=>setChat(c=>[...c,d]));return()=>socket.off('message');},[]);
 return(
  <div>
    <input value={room} onChange={e=>setRoom(e.target.value)} placeholder='Room'/><button onClick={()=>socket.emit('join',{room})}>Join</button>
    <div>{chat.map((c,i)=><div key={i}>{c.timestamp}[{c.sid}]:{c.msg}</div>)}</div>
    <input value={msg} onChange={e=>setMsg(e.target.value)} placeholder='Message'/><button onClick={()=>{socket.emit('message',{room,msg, timestamp:new Date().toISOString()});setMsg('');}}>Send</button>
  </div>
 );
}

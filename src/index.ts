import express from 'express'
import { Server, Socket } from 'socket.io'
import { IMessageSocketMsg } from './models/chat.model';

const app = express()

const port = 5000

app.get('/', (_, res) => {
    res.status(200).send()
})

app.get('/users', (_, res) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
})

app.get('/channels', (_,res) => {
    res.json({
        channels: ['global_notifications', 'global_chat']
    })
})

const server_instance = app.listen(port, () => console.log(`Running on port ${port}`));
const io = new Server(server_instance);

io.on("connection",(socket:Socket) => {
    console.log("new client connected", socket.id);
    socket.emit("connected", null);
    const msg:IMessageSocketMsg = {
        sender:"server",
        msg:"hello sir, how are you",
        receiver:"browser"+socket.id
    }
    socket.emit("chat_msg", msg);
})


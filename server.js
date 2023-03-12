const express = require('express');
const dbOperation = require('./dbFiles/dbOperation');
const dbChat = require('./dbFiles/dbChat');
const cors = require('cors');
const http = require('http')
const User = require('./dbFiles/models/User');
const { Server } = require('socket.io')

const API_PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app)

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/profile', async function (req, res) {
    let data = await dbOperation.getProfile(req.body.id).then(res => {
        return res
    })

    res.send({ result: data })
})

app.post('/api', async function (req, res) {
    let data = await dbOperation.getPosts(req.body.parameter, req.body.id).then(res => {
        return res
    })
    res.send({ result: data })
})

app.post('/signin', async function (req, res) {
    let data = await dbOperation.signUser(req.body.login, req.body.password).then(res => {
        return res
    })
    let error = ''

    if (data.data.length > 0) {
        if (data.data[0].password !== req.body.password) {
            console.log('Error executed 1')
            res.status(400).send({
                message: 'This is an error!',
                data: {}
            });
        } else {
            res.send({ result: data.data })
        }
    } else {
        console.log('Error executed 2')
        res.status(400).send({
            message: 'This is an error!',
            data: {}
        });
    }
})

app.post('/likehandle', async function (req, res) {
    let data = await dbOperation.changeLikeState(req.body.likeId, req.body.postId, req.body.userId).then(res => {
        return res
    })

    res.send({ result: data })
})

app.post('/chatusers', async function (req, res) {
    let data = await dbChat.getChatUsers(req.body.userId).then(res => {
        return res
    })

    res.send({ result: data })
})

app.post('/messages', async function (req, res) {
    let data = await dbChat.getMessagesFromChat(req.body.contactId).then(res => {
        return res
    })

    res.send({ result: data })
})

app.post('/userstoaccomplish', async function (req, res) {
    let data = await dbOperation.usersToAccomplish(req.body.categories).then(res => {
        return res;
    })

    res.send({ result: data })
})

app.post('/request', async function (req, res) {
    let data = await dbOperation.createRequest(req.body.request).then(res => {
        return res;
    })

    res.send({ result: data })
})

app.post('/quit', function (req, res) {
    res.send({ result: 'Eat' })
})

async function run() {
    let data = await dbOperation.getPosts().then(res => {
        return res
    })
    console.log(data[0])
}



const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    },
})

io.on('connection', (socket) => {
    socket.on('join_chat', (data) => {
        socket.join(data)
    })

    socket.on('send_message', async (data) => {
        let insert = await dbChat.addMessagesToChat(data).then(res => { return res })
        let updateState = {
            contactId: data.chat,
            deliveryTime: data.time,
            message: data.message,
            messageId: insert.data.insertId,
            userId: data.author,
            userImage: data.details.userImage,
            username: data.details.username,
            reply: [{
                message_repliesId: insert.data.message_repliesId,
                newmessageId: insert.data.newmessageId,
                replyId: insert.data.replyId
            }]
        }
        socket.to(data.chat).emit('receive_message', updateState)
    })

    socket.on('remove_message', async (data) => {
        let removed = await dbChat.removeMessagesFromChat(data.messageId)
        socket.to(data.chat).emit('message_removed', data.messageId);
    })

    socket.on('edit_message', async (data) => {
        let edited = await dbChat.editMessagesFromChat(data)
        socket.to(data.chat).emit('message_edited', data)
    })

    socket.on('disconnect', () => {
        console.log('Disconnected')
    })
})


server.listen(API_PORT, () => console.log('listening'));
const express = require('express');
const dbOperation = require('./dbFiles/dbOperation');
const dbChat = require('./dbFiles/dbChat');
const cors = require('cors');
const http = require('http')
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
    let data = await dbOperation.getPosts(req.body.parameter, req.body.id, req.body.userId).then(res => {
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
    let data = await dbOperation.changeLikeState(req.body.postId, req.body.userId).then(res => {
        return res
    })

    res.send({ result: data })
})

app.post('/followhandle', async function (req, res) {
    let data = await dbOperation.changeFollowState(req.body.authorId, req.body.userId).then(res => {
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
    const contact = req.body.contact
    let data = []

    if (contact.type === 'Private') {
        data = await dbChat.getMessagesFromPrivateChat(contact.id).then(res => {
            return res
        })
    } else {
        data = await dbChat.getMessagesFromGroupChat(contact.id).then(res => {
            return res
        })
    }

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
        let insert = {}

        if (data.chatType === 'Private') {
            insert = await dbChat.addMessagesToChat(data).then(res => { return res })
        } else {
            insert = await dbChat.insertMessagesToGroupChat(data).then(res => { return res })
        }
        
        socket.to(insert.data.contactId).emit('receive_message', insert.data)
    })

    socket.on('remove_message', async (data) => {
        if (data.chat.type === 'Private') {
            await dbChat.removeMessagesFromChat(data.messageId)
        } else {
            await dbChat.removeMessagesFromGroupChat(data.messageId)
        }
        socket.to(data.chat.id).emit('message_removed', data.messageId);
    })

    socket.on('edit_message', async (data) => {
        if (data.chat.type === 'Private') {
            await dbChat.editMessagesFromChat(data)
        } else {
            await dbChat.editGroupMessagesFromChat(data)
        }

        socket.to(data.chat.id).emit('message_edited', data)
    })

    socket.on('disconnect', () => {
        console.log('Disconnected')
    })
})


server.listen(API_PORT, () => console.log('listening'));
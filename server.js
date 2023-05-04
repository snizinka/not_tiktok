const express = require('express');
const dbContent = require('./dbFiles/dbContent');
const dbOperation = require('./dbFiles/dbOperation');
const dbChat = require('./dbFiles/dbChat');
const cors = require('cors');
const http = require('http')
const multer = require('multer')
const { Server } = require('socket.io');

const API_PORT = process.env.PORT || 9000;
const app = express();
const server = http.createServer(app)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/post_content/pictures')
    },
    filename: function (req, file, cb) {
        const searchString = '.';
        const postContentIndex = file.originalname.indexOf(searchString);
        let postfix = ''
        if (postContentIndex !== -1) {
            postfix = file.originalname.substring(postContentIndex + searchString.length);
        }

        console.log(file)

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + `.${postfix}`)
    }
})
const upload = multer({ storage: storage })


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

app.post('/createchat', async function (req, res) {
    let data = await dbChat.addGroup(req.body.chat).then(res => {
        return res;
    })

    res.send({ result: data })
})

app.post('/availableforchat', async function (req, res) {
    let data = await dbChat.getUsersAvailableForChat(req.body.chat).then(res => {
        return res;
    })

    res.send({ result: data })
})

app.post('/adduserstochat', async function (req, res) {
    let data = await dbChat.addUsersToChat(req.body.chat).then(res => {
        return res;
    })

    res.send({ result: data })
})

app.post('/removeuserfromchat', async function (req, res) {
    let data = await dbChat.removeFromGroup(req.body.chat).then(res => {
        return res;
    })

    res.send({ result: data })
})

app.post('/leavechat', async function (req, res) {
    let chat = req.body.chat;
    let data = []

    if (chat.chatType === 'Group') {
        data = await dbChat.leaveChat(chat).then(res => {
            return res;
        })
    } else {
        data = await dbChat.leavePrivateChat(chat).then(res => {
            return res;
        })
    }

    res.send({ result: data })
})

app.post('/uploadpost', async function (req, res) {
    let data = await dbContent.uploadContent(req.body.content).then(res => {
        return res;
    })
    
    res.send({ result: data })
})


app.post('/uploadfile', upload.single('file'), async function (req, res) {
    const searchString = 'pictures\\';
    const postContentIndex = req.file.path.indexOf(searchString);
    let trimmedString = ''
    if (postContentIndex !== -1) {
        trimmedString = req.file.path.substring(postContentIndex + searchString.length);
    }
    res.send({ result: trimmedString })
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
        console.log(socket.rooms)
    })

    socket.on('send_message', async (data) => {
        let insert = {}

        if (data.chatType === 'Private') {
            insert = await dbChat.addMessagesToChat(data).then(res => { return res })
        } else {
            insert = await dbChat.insertMessagesToGroupChat(data).then(res => { return res })
        }

        console.log(insert.data.contactId)

        socket.broadcast.to(insert.data.contactId).emit('receive_message', insert.data)
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

    socket.on('leave', (room) => {
        socket.leave(room)
        console.log('left')
    })

    socket.on('disconnect', (room) => {
        socket.leave(room)
        console.log('Disconnected')
    })
})


server.listen(API_PORT, () => console.log('listening'));
const config = require('./dbConfig');
const util = require('util');
const Category = require('./models/Category');
const User = require('./models/User');
const Video = require('./models/Video');
const Picture = require('./models/Picture');
const Text = require('./models/Text');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

const query = util.promisify(config.query).bind(config)


const getChatUsers = async (userId) => {
    let user = await query(`Select c.contactId, c.fuserId, c.suserId, c.contactDate, 
    u.userId as firstId, u.username as firstName, u.userLink, u.mailAddress, u.phoneNumber, u.userImage as firstImage, 
    other.userId as secondId, other.username as secondName, other.userLink, other.mailAddress, other.phoneNumber, other.userImage as secondImage
    from nottiktok.contacts as c
    left join nottiktok.users as u on u.userId = ${userId}
    left join nottiktok.users as other on other.userId = c.fuserId OR other.userId = c.suserId
    where (c.fuserId = u.userId AND  c.suserId = other.userId) OR (c.suserId = u.userId AND  c.fuserId = other.userId)`)

    return { data: user }
}

const getMessagesFromChat = async (contactId) => {
    let messages = await query("SELECT msgs.`chat-messagesId` as messageId, msgs.contactId, msgs.message, msgs.deliveryTime, " +
    "usr.userId, usr.username, usr.userImage FROM nottiktok.`chat-messages` as msgs " +
    "LEFT join nottiktok.contacts as cntct ON cntct.contactId = " + contactId +
    " LEFT JOIN nottiktok.users as usr on usr.userId = msgs.authorId " +
    "WHERE msgs.contactId = " + contactId);

    for(let i = 0; i < messages.length; i++) {
        let data = await query(`SELECT * FROM nottiktok.message_replies WHERE newmessageId = ${messages[i].messageId}`);
        messages[i].reply = data
        console.log(messages[i])
    }

    return { data: messages }
}

const addMessagesToChat = async (message) => {
    console.log(message.chatMode.mode)
    let added = await query("INSERT INTO nottiktok.`chat-messages` (authorId, contactId, message) VALUES("+message.author + ", "+ message.chat +",'"+ message.message +"')");
    if(message.chatMode.mode === 'Reply') {
        let reply = await query(`INSERT INTO nottiktok.message_replies (newmessageId, replyId) VALUES(${added.insertId}, ${message.chatMode.messageId})`)
        added.message_repliesId = reply.insertId
        added.newmessageId = added.insertId
        added.replyId = message.chatMode.messageId
    }

    return { data: added }
}

const removeMessagesFromChat = async (messageId) => {
    let removed = await query("DELETE FROM nottiktok.`chat-messages` WHERE `chat-messagesId` = " + messageId);

    return { data: removed }
}

const editMessagesFromChat = async (message) => {
    console.log(message)
    let edited = await query("UPDATE nottiktok.`chat-messages` SET message = '" + message.newmessage + "' WHERE `chat-messagesId` = " + message.messageId);

    return { data: edited }
}

module.exports = { getChatUsers, getMessagesFromChat, addMessagesToChat, removeMessagesFromChat, editMessagesFromChat };
const GetContactByUserId = require('./models/Contact/GetContactByUserId');
const GetMessagesByContactId = require('./models/Chat/Message/GetMessage/GetMessagesByContactId');
const GetGroupMessageReply = require('./models/Chat/Message/GetMessage/GetGroupMessageReply');
const GetMessageReply = require('./models/Chat/Message/GetMessage/GetMessageReply');
const AddMessageToPrivateChat = require('./models/Chat/Message/AddMessage/AddMessageToPrivateChat');
const AddMessageToGroupChat = require('./models/Chat/Message/AddMessage/AddMessageToGroupChat');
const GetMessageById = require('./models/Chat/Message/GetMessage/GetMessageById');
const ReplyToPrivateMessage = require('./models/Chat/Message/ReplyToMessage/ReplyToPrivateMessage');
const ReplyToGroupMessage = require('./models/Chat/Message/ReplyToMessage/ReplyToGroupMessage');
const DeletePrivateMessage = require('./models/Chat/Message/DeleteMessage/DeletePrivateMessage');
const DeleteGroupMessage = require('./models/Chat/Message/DeleteMessage/DeleteGroupMessage');
const EditPrivateMessage = require('./models/Chat/Message/EditMessage/EditPrivateMessage');
const EditGroupMessage = require('./models/Chat/Message/EditMessage/EditGroupMessage');
const GetGroupContactsByUserId = require('./models/Contact/GetGroupContactsByUserId');
const GetGroupMessagesById = require('./models/Chat/Message/GetMessage/GetGroupMessagesById');
const GetGroupMessageById = require('./models/Chat/Message/GetMessage/GetGroupMessageById');

const getChatUsers = async (userId) => {
    let contacts = await GetContactByUserId.getContact(userId)
    let groupContacts = await GetGroupContactsByUserId.getContact(userId)
    let unitedContacts = [contacts, groupContacts]

    return { data: unitedContacts }
}

const getMessagesFromPrivateChat = async (contactId) => {
    let messages = await GetMessagesByContactId.getMessages(contactId)
    for(let i = 0; i < messages.length; i++) {
        messages[i] = await GetMessageReply.getMessageReplies(messages[i])
    }

    return { data: messages }
}

const getMessagesFromGroupChat = async (chatId) => {
    let messages = await GetGroupMessagesById.getMessages(chatId)

    for(let i = 0; i < messages.length; i++) {
        messages[i] = await GetGroupMessageReply.getMessageReplies(messages[i])
    }

    return { data: messages }
}

const addMessagesToChat = async (message) => {
    let added = await AddMessageToPrivateChat.addMessage(message)
    let createdMessage = await GetMessageById.getMessages(added.insertId)
    
    if (message.chatMode.mode === 'Reply') {
        await ReplyToPrivateMessage.replyToMessage({message: createdMessage, chatMode: message.chatMode})
    }

    createdMessage = await GetMessageReply.getMessageReplies(createdMessage)

    return { data: createdMessage }
}

const insertMessagesToGroupChat = async (message) => {
    let added = await AddMessageToGroupChat.addMessage(message)
    let createdMessage = await GetGroupMessageById.getMessages(added.insertId)
    
    if (message.chatMode.mode === 'Reply') {
        await ReplyToGroupMessage.replyToMessage({message: createdMessage, chatMode: message.chatMode})
    }

    createdMessage = await GetGroupMessageReply.getMessageReplies(createdMessage)

    return { data: createdMessage }
}

const removeMessagesFromChat = async (messageId) => {
    let removed = await DeletePrivateMessage.deleteMessage(messageId)

    return { data: removed }
}

const removeMessagesFromGroupChat = async (messageId) => {
    let removed = await DeleteGroupMessage.deleteMessage(messageId)

    return { data: removed }
}

const editMessagesFromChat = async (message) => {
    let edited = await EditPrivateMessage.editMessage(message)

    return { data: edited }
}

const editGroupMessagesFromChat = async (message) => {
    let edited = await EditGroupMessage.editMessage(message)

    return { data: edited }
}

module.exports = { getChatUsers, getMessagesFromPrivateChat: getMessagesFromPrivateChat, getMessagesFromGroupChat, addMessagesToChat, insertMessagesToGroupChat, removeMessagesFromChat, removeMessagesFromGroupChat, editMessagesFromChat, editGroupMessagesFromChat };
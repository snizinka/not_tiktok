const Message = require("../Message");
const config = require('../../../../dbConfig');
const util = require('util');
const User = require("../../../User/User");
const query = util.promisify(config.query).bind(config)

class GetLastPrivateMessagesByContactId extends Message {
    static async getMessages(contactId) {
        let messages = await query("SELECT msgs.`chat-messagesId` as messageId, msgs.contactId, msgs.message, msgs.deliveryTime, msgs.authorId, msgs.forwarded_from, msgs.forward_chat " +
            "FROM nottiktok.`chat-messages` as msgs " +
            "WHERE msgs.contactId = " + contactId + " order by msgs.`chat-messagesId` desc limit 10")

        let messageList = []

        for (let i = 0; i < messages.length; i++) {
            let messageAuthor = new User(messages[i].authorId)
            await messageAuthor.fetchUserData()
            messageList.push(new Message(messages[i].messageId, messages[i].contactId, messages[i].message, messages[i].deliveryTime, messageAuthor, [], messages[i].forwarded_from, messages[i].forward_chat))
        }

        return messageList
    }
}

module.exports = GetLastPrivateMessagesByContactId
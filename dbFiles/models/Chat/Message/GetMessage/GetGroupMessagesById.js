const Message = require("../Message");
const config = require('../../../../dbConfig');
const util = require('util');
const User = require("../../../User/User");
const query = util.promisify(config.query).bind(config)

class GetGroupMessagesById extends Message {
    static async getMessages(chatId) {
        let messages = await query("SELECT msgs.messageId, msgs.chatId as contactId, msgs.message, msgs.deliveryTime, msgs.authorId " +
        "FROM nottiktok.groupmessages as msgs " +
        "WHERE msgs.chatId = " + chatId)

        let messageList = []

        for (let i = 0; i < messages.length; i++) {
            let messageAuthor = new User(messages[i].authorId)
            await messageAuthor.fetchUserData()
            messageList.push(new Message(messages[i].messageId, messages[i].contactId, messages[i].message, messages[i].deliveryTime, messageAuthor))
        }

        return messageList
    }
}

module.exports = GetGroupMessagesById
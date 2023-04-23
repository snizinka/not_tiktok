const Message = require("../Message");
const config = require('../../../../dbConfig');
const util = require('util');
const User = require("../../../User/User");
const query = util.promisify(config.query).bind(config)

class GetMessageById extends Message {
    static async getMessages(messageId) {
        let messages = await query("SELECT msgs.`chat-messagesId` as messageId, msgs.contactId, msgs.message, msgs.deliveryTime, msgs.authorId " +
            "FROM nottiktok.`chat-messages` as msgs " +
            "WHERE msgs.`chat-messagesId` = " + messageId)

            if(messages.length > 0) {
                let messageAuthor = new User(messages[0].authorId)
                await messageAuthor.fetchUserData()

                let message = new Message(messages[0].messageId, messages[0].contactId, messages[0].message, messages[0].deliveryTime, messageAuthor)
                return message
            } else {
                return
            }
    }
}

module.exports = GetMessageById
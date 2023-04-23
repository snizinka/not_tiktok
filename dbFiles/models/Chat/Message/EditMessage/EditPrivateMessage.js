const Message = require("../Message");
const config = require('../../../../dbConfig');
const util = require('util');
const query = util.promisify(config.query).bind(config)

class EditPrivateMessage extends Message {
    static async editMessage(message) {
        let edited = await query("UPDATE nottiktok.`chat-messages` SET message = '" + message.newmessage + "' WHERE `chat-messagesId` = " + message.messageId)
        return edited
    }
}

module.exports = EditPrivateMessage
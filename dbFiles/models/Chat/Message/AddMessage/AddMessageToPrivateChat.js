const Message = require("../Message");
const config = require('../../../../dbConfig');
const util = require('util');
const query = util.promisify(config.query).bind(config)

class AddMessageToPrivateChat extends Message {
    static async addMessage(message) {
        let added = await query("INSERT INTO nottiktok.`chat-messages` (authorId, contactId, message) VALUES(" + message.author + ", " + message.chat + ",'" + message.message + "')");
        return added
    }
}

module.exports = AddMessageToPrivateChat
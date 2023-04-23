const config = require('../../../dbConfig');
const util = require('util');
const query = util.promisify(config.query).bind(config)

class Message {
    constructor(messageId, contactId, message, deliveryTime, user, reply = []) {
        this.messageId = messageId,
            this.contactId = contactId,
            this.message = message,
            this.deliveryTime = deliveryTime,
            this.user = user,
            this.reply = reply
    }

    static async getMessages(parameter) { }

    static async addMessage(message) { }

    static async replyToMessage(message) { }

    static async deleteMessage(messageId) { }

    static async editMessage(message) { }
}

module.exports = Message
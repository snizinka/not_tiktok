const Chat = require("./Chat");
const config = require('../../dbConfig');
const util = require('util');
const query = util.promisify(config.query).bind(config)

class CreateGroupChat extends Chat {
    static async createChat(group) {
        let addedGroup = await query("INSERT INTO nottiktok.chat (chatName, chatType) VALUES('" + group.chatName + "', '" + group.chatType + "')");
        return addedGroup
    }
}

module.exports = CreateGroupChat
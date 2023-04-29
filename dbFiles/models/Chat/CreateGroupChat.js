const Chat = require("./Chat");
const config = require('../../dbConfig');
const util = require('util');
const query = util.promisify(config.query).bind(config)

class CreateGroupChat extends Chat {
    static async createChat(group) {
        let addedGroup = await query("INSERT INTO nottiktok.chat (chatName, chatType, chat_link, chat_image) VALUES('" + group.chatName + "', '" + group.chatType + "', '"+ group.chatLink +"', '"+ group.chatImage +"')");
        return addedGroup
    }
}

module.exports = CreateGroupChat
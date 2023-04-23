const Contact = require("./Contact");
const config = require('../../dbConfig');
const util = require('util');
const User = require('../User/User');
const query = util.promisify(config.query).bind(config)

class GetGroupContacts extends Contact {
    static async getContact(chatId) {
        let chat = await query(`Select c.chatName, c.chatId  
        from nottiktok.chat as c
        where chatId = ${chatId}`)
        chat = chat[0]
        chat.chatType = 'Group'
        chat.chatImage = undefined
        chat.chatUser = 2

        let user = await query(`Select c.userId, c.chatId, c.contactLinkId 
        from nottiktok.contactlink as c
        where chatId = ${chatId}`)

        let users = []
        for (let i = 0; i < user.length; i++) {
            let userOne = new User(user[i].userId)
            await userOne.fetchUserData()
            users.push({ chatUser: userOne })
        }

        return { users, chat: chat }
    }
}

module.exports = GetGroupContacts
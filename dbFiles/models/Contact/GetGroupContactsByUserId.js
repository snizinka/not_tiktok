const Contact = require("./Contact");
const config = require('../../dbConfig');
const util = require('util');
const User = require('../User/User');
const query = util.promisify(config.query).bind(config)

class GetGroupContactsByUserId extends Contact {
    static async getContact(userId) {
        let chat = await query(`SELECT cht.chatId, cht.chatName, cht.chatType FROM nottiktok.chat as cht
        JOIN nottiktok.contactlink as cntclnk on cntclnk.userId = ${userId}
        WHERE cntclnk.userId = ${userId}`)
        
        let user = []

        for (let i = 0; i < chat.length; i++) {
            chat[i].chatType = 'Group'
            chat[i].chatImage = undefined
            chat[i].chatUser = userId
            
            let groupUser = await query(`Select c.userId, c.chatId, c.contactLinkId 
            from nottiktok.contactlink as c
            where chatId = ${chat[i].chatId}`)
           
            user.push(groupUser[0])
        }


        let users = []
        for (let i = 0; i < user.length; i++) {
            let userOne = new User(user[i].userId)
            await userOne.fetchUserData()
            users.push({ chatUser: userOne })
        }

        return { users, chat: chat, chatType: 'Group' }
    }
}

module.exports = GetGroupContactsByUserId
const Contact = require("./Contact");
const config = require('../../dbConfig');
const util = require('util');
const User = require('../User/User');
const query = util.promisify(config.query).bind(config)


class GetNotInGroupContacts extends Contact {
    static async getContact(chat) {
        let user = await query(`SELECT distinct us.*
        FROM nottiktok.users as us
        JOIN nottiktok.contactlink as cntclnk on cntclnk.userId != us.userId
        JOIN nottiktok.chat as cht on cntclnk.chatId = cht.chatId
        WHERE cht.chatId = ${chat.chatId} and us.userId != all(select userId from nottiktok.contactlink) and us.userId = any(select usr.userId 
        from nottiktok.users as us
        join nottiktok.contacts as ct on ct.fuserId = us.userId or ct.suserId = us.userId
        join nottiktok.users as usr on usr.userId = ct.fuserId or usr.userId = ct.suserId
        where us.userId = ${chat.userId} and usr.userId != us.userId)`)

        let users = []
        for (let i = 0; i < user.length; i++) {
            let availableUser = new User(user[i].userId)
            await availableUser.fetchUserData()
            users.push(availableUser)
        }

        return { users }
    }
}

module.exports = GetNotInGroupContacts
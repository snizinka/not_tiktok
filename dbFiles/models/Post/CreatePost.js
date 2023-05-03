const config = require('../../dbConfig');
const util = require('util');
const query = util.promisify(config.query).bind(config)

class CreatePost {
    static async createPost(data) {
        let queryString = `INSERT INTO nottiktok.post (userId, description) VALUES(${data.userId}, "${data.description}")`;
        let newPost = await query(queryString);
        return newPost;
    }
}

module.exports = CreatePost;
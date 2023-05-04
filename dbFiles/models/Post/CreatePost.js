const config = require('../../dbConfig');
const util = require('util');
const query = util.promisify(config.query).bind(config)

class CreatePost {
    static async createPost(data) {
        const queryString = `INSERT INTO nottiktok.post (userId, description, previewImage) VALUES(${data.userId}, "${data.description}", "${data.previewImage}")`
        const newPost = await query(queryString)

        return newPost
    }
}

module.exports = CreatePost;
const config = require('../../dbConfig');
const util = require('util');
const Text = require('./Text');
const query = util.promisify(config.query).bind(config)

class UploadTextContent extends Text {
    static async uploadTextContent(data) {
        let queryString = `INSERT INTO nottiktok.textcontent (userId, postId, textContent) VALUES(${data.userId}, ${data.postId}, "${data.textContent}")`;
        let newText = await query(queryString);
        return newText;
    }
}

module.exports = UploadTextContent;
const config = require('../../dbConfig');
const util = require('util');
const Text = require('./Text');
const query = util.promisify(config.query).bind(config)

class UploadTextContent extends Text {
    static async uploadContent(data) {
        const queryString = `INSERT INTO nottiktok.textcontent (userId, postId, textTitle, textContent) VALUES(${data.userId}, ${data.postId}, "${data.content.content.title}", "${data.content.content.body}")`;
        const newText = await query(queryString)
        
        return newText;
    }
}

module.exports = UploadTextContent;
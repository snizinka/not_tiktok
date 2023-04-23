const config = require('../dbConfig');
const util = require('util');
const query = util.promisify(config.query).bind(config)

class Text {
    constructor(textContentId, userId, postId, textContent, datePublished) {
        this.textContentId = textContentId;
        this.userId = userId;
        this.postId = postId;
        this.textContent = textContent;
        this.datePublished = datePublished;
    }

    static async getTextContent(postId) {
        const textContent = JSON.parse(JSON.stringify(await query(`SELECT * FROM nottiktok.textcontent as txt WHERE txt.postId = ${postId}`)));
        let textArray = [];

        for(let text of textContent) {
            textArray.push(new Text(text.textContentId, text.userId, text.postId, text.textContent, text.datePublished))
        }

        return textArray;
    }
}

module.exports = Text;